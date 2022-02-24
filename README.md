# express_boilerplate
express boilerplate code

curl --location --request POST 'http://localhost:3000/v1/users/createUser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"test1",
    "class":"A"
}'

curl --location --request GET 'http://localhost:3000/v1/users/getUsers'

curl --location --request GET 'http://localhost:3000/v1/users/getUser/1645693588000'

curl --location --request PATCH 'http://localhost:3000/v1/users/manageUsers' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":1645694650000,
    "name":"test2",
    "class":"A"
}'

curl --location --request DELETE 'http://localhost:3000/v1/users/manageUsers' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":1645696417000
}'