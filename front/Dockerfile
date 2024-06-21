# Використовуємо офіційний образ Node.js як базовий
FROM node:16-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json до робочої директорії
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проект до робочої директорії
COPY . .

# Збираємо проект
RUN npm run build

# Встановлюємо Nginx для обслуговування зібраного додатка
FROM nginx:alpine

# Копіюємо зібраний додаток до Nginx директорії
COPY --from=0 /app/build /usr/share/nginx/html

# Копіюємо конфігурацію Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Відкриваємо порт 80 для Nginx
EXPOSE 80

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]
