FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 3002

CMD ["python", "manage.py", "runserver", "0.0.0.0:3002"]
