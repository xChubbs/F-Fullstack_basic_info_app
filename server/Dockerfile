# Image to use
FROM python:3.9

WORKDIR /code

# Copy of requirements
COPY ./requirements.txt /code/requirements.txt

# Install of requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy of directory
COPY . /code/

# CMD run of uvicorn to start server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]