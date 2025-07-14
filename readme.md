## Step backend

### Step 1 Create file package.json
```bash
npm init -y
```

### Step 2 Create npm
```bash
npm i express cors morgan yup bcrypt jsonwebtoken dotenv
```

### Step 3 Install prisma and faker
```bash
npm i -D prisma @faker-js/faker
(-D is dev dependency)
```

### Step 4 Prisma init
```bash
npx prisma init
```

### Step 5 Add path to .env
```bash
PORT=8888
DATABASE_URL="mysql://root:MySQL@1234@localhost:3306/Mock-final-project"
JWT_SECRET="MOCKPROJECT"
```