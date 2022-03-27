open Opium
open Ocaml_webapp

(* users list to store users locally *)
let users = ref []

(* register_user creates a post request that takes in a json containing the email, password, username of a new user and outputs "Email taken" if users contains the email already, "Username taken" if users contains the username already, and "Success" if the information can be used to create a user that is added to users *)
let register_user =  
  App.post "/register" (fun request -> 
    Lwt.bind (Request.to_json_exn request) (fun user_json -> let user_info = user_json |> User.user_of_yojson in 
    let matchUser x = 
      let rec matchUserList (y : User.user list)= match y with
    | [] -> x := user_info :: !x; Lwt.return (Response.of_plain_text ("Success"))
    | {username;email;_} :: t -> if email = user_info.email then (x := !x; Lwt.return (Response.of_plain_text("Email taken"))) else if username = user_info.username then (x := !x; Lwt.return (Response.of_plain_text("Username taken")))else matchUserList (t)
  in matchUserList !x in
       matchUser users))

(* login_user creates a post request that takes in the json containing the information for a user x and outputs "No User" if x is not in users and a json containing the email and username of x otherwise *)
let login_user = 
  App.post "/login" (fun request -> 
    Lwt.bind (Request.to_json_exn request) (fun user_json -> let user_info =
      user_json |> User.user_of_yojson in 
      let rec matchUser (x : User.user list) = match x with
      | [] -> Lwt.return (Response.of_plain_text ("No User"))
      | {username;password;email} :: t -> if username = user_info.username && password = user_info.password then Lwt.return (Response.of_json(`Assoc[("email", `String email);("username", `String username)])) else if email = user_info.email && password = user_info.password then Lwt.return (Response.of_json(`Assoc[("email", `String email);("username", `String username)])) else matchUser t
    in matchUser !users))

(* get_users creates a get request that outputs users for testing purposes *)
let get_users = 
  App.get "/users" (fun _ -> 
    let users = !users in
    let rec json x = match x with
    | [] -> []
    | h :: t -> User.yojson_of_user (h) :: json t
  in
    Lwt.return (Response.of_json (`Assoc [ ("users", `List (json users))])))

(* messages list to store messages locally *)
let messages = ref []

(* read_messages creates a get request that outputs a json containing the list of messages as objects with username and the message
Raises: "no users" if the userid associated with a message is not an email in users (this should not occur as userid should be immutable after registration) *)
let read_messages = 
  App.get "/getMessages" (fun _ -> 
    let messages = !messages in
    let rec json (x : Message.message list) = match x with
    | [] -> []
    | h1 :: t1 -> `Assoc [("username", `String (let rec find_user (y : User.user list) = match y with
    | [] -> failwith "no users"
    | h2 :: t2 -> if h2.email = h1.userid then h2.username else find_user t2 
  in find_user !users)); 
    ("message", `String h1.msg)] :: json t1
  in
    Lwt.return (Response.of_json (`Assoc [ ("data", `List (json messages))])))

(* post_messages creates a post request that takes in a json containing the username and message of a message and adds a message with the userid/email and message as fields to messages 
Raises: "no users" if the username in the json does not match the current username of any user in users 
"invalid message json" if the input json does not contain username and message *)
let post_messages = 
  App.post "/postMessage" (fun request -> 
    Lwt.bind (Request.to_json_exn request) (fun input_json ->
    (let rec input_message (x : User.user list) : Message.message = match x with 
    | [] -> failwith "no users"
    | h :: t -> if h.username = (let match_user y = match y with
      | `Assoc [ ("username", `String username); _ ] 
        -> username
      | _ -> failwith "invalid message json" in match_user input_json) then 
        {userid = h.email; msg = (let match_message z = match z with
      | `Assoc [ _ ; ("message", `String message)] 
        -> message
      | _ -> failwith "invalid message json" in match_message input_json)} 
    else 
        input_message t in messages := input_message !users :: !messages); 
        Lwt.return (Response.make ~status: `OK ())))


(* cors creates a middleware that fixes cors policy errors that are encountered when trying to make requests to the server*)
let cors = Middleware.allow_cors ~origins:["*"] ~credentials:false ()


(* static_content creates a middleware that serves the frontend static files so that the app can be accessed from the browser
let static_content = Middleware.static_unix ~local_path:(Unix.realpath "frontend/dist") ()*)

(* Creates the app with the above functions *)
let _ =
  App.empty
  |> App.middleware cors
  (*
  |> App.middleware static_content *)
  |> get_users
  |> register_user
  |> login_user
  |> read_messages
  |> post_messages
  |> App.run_command

