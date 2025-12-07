# Hello DevOps

Egyszerű Node.js + Express „Hello world” alkalmazás.

I. Kötelező rész:
## Követelmények - A projekt futtatásához szükséges eszközök:
- [Node.js ](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/) + **Dev Containers** bővítmény

## Alkalmazás
Az alkalmazás egy egyszerű HTTP szerver, amely a `http://localhost:8080` címen elérhető, és visszaadja:

```
Hello DevOps!
```

### Fő fájl: `server.js`
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, DevOps!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

## Futtatás lokálisan
```bash
npm install
npm start
```
Alapértelmezett URL: [http://localhost:8080](http://localhost:8080)


II. OPCIONÁLIS:
## II/1
## Dockerizálás
A projekt tartalmaz egy `Dockerfile`-t, amelyből létrehozható a futtatható image.

### Dockerfile:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start"]
```

### Image build:
```bash
docker build -t hello-devops:v1 .
```

### Konténer futtatása:
```bash
docker run -p 8080:8080 hello-devops:v1
```

Alkalmazás elérés: [http://localhost:8080](http://localhost:8080)

---

## Git – trunk-based development
- **Trunk branch**: `main`
- **Feature branch példa**: `feature/change-message`

### Git parancsok:
```bash
git init
git add .
git commit -m "feat: alap Express app"
git branch -M main
git remote add origin https://github.com/Kochard/hello-devops.git
git push -u origin main
```

Feature branch:
```bash
git checkout -b feature/change-message
# módosítások...
git commit -m "feat: üzenet módosítása"
git push -u origin feature/change-message
```

---

## Dev Container (VS Code)
A projekt tartalmaz egy `.devcontainer` mappát:

**`.devcontainer/devcontainer.json`:**
```json
{
  "name": "Hello DevOps DevContainer",
  "build": { "dockerfile": "Dockerfile" },
  "containerUser": "root",
  "postCreateCommand": "npm install",
  "forwardPorts": [8080]
}
```

### Indítás:
1. Telepítsd a **Dev Containers** bővítményt VS Code-ban.
2. Nyisd meg a projektet → bal alsó sarok zöld ikon → **Reopen in Container**.
3. A konténerben:
```bash
npm start
```

II. OPCIONÁLIS:
## II/4
## Felhő deploy
**Szolgáltató**: Render  
**Deploy lépések**:
1. Regisztráció: [https://render.com]
2. Új Static Service → GitHub repo kiválasztása
3. Deploy
```




