## OSF-Store Node.js Backend

--`API Endpoints:`

-- GET: All products: - https://osf-store.onrender.com/api/products:

- Response example (Array of Objects):

  [
  {
  "id": "ID11",
  "imageUrl": "https://osf-store.onrender.com/api/products/images/item1.png",
  "title": "Kristina Dam Oak Table With White Marble Top",
  "label": "awesome",
  "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "price": 1237
  }
  ]

-- GET: All users: - https://osf-store.onrender.com/api/users:

- Response example (Array of Objects):

  [
  {
  "id": "AEZAKMI-ID",
  "email": "HESOYAM@mail.com"
  }
  ]

--POST: Create new user: https://osf-store.onrender.com/api/users:

- Required body: {email: example@email.com}
- Response example (Object, created user):

{
"id": "HESOYAM-ID",
"email": "example@email.com"
}
