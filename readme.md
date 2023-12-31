## OSF-Store Node.js Backend

--`API Endpoints:`

-- GET: Images: - https://osf-store.onrender.com/api/products/images/:imageFileName

-- GET: All products: - https://osf-store.onrender.com/api/products:

- Response example (Array of Objects):

      [{
      "id": "ID11",
      "imageUrl": "https://osf-store.onrender.com/api/products/images/item1.png",
      "title": "Kristina Dam Oak Table With White Marble Top",
      "label": "awesome",
      "description": "description",
      "price": 1237
      }]

-- GET: All subscribers: - https://osf-store.onrender.com/api/subscribers:

- Response example (Array of Objects):

      [{
      "id": "AEZAKMI-ID",
      "email": "HESOYAM@mail.com"
      }]

--POST: Create new subscriber: https://osf-store.onrender.com/api/subscribers:

- Required body: { email: example@email.com }
- Response example (Object, created subscriber):

      {
      "id": "HESOYAM-ID",
      "email": "example@email.com"
      }

-- GET: All users: - https://osf-store.onrender.com/api/users:

- Response example (Array of Objects):

      [{
      "id": "AEZAKMI-ID",
      "email": "HESOYAM@mail.com"
      }]

--POST: Create new user: https://osf-store.onrender.com/api/users:

- Required body: { email: example@email.com, password: AEZAKMi1! }
- Response example (Object, created user, without password):

      {
      "id": "HESOYAM-ID",
      "email": "example@email.com"
      }
