# Note Taking App

This is a note taking application.

## Tech Stack

* Python/Django
* Node/React
* TypeScript
* GraphQL

## Installation

### Clone the repo 

```
git clone https://github.com/denibulkashvili/TakeNote
```

### Install Python Packages

> Python 3.7 recommended 

1. Create new virtual environment

e.g. via `Conda`
```
conda create --name my-env
conda activate my-env
```

2. Install requirements

```
pip install -r requirements.txt
```

3. Add `.env` file inside `take_note` directory

```
DEBUG=on
SECRET_KEY='paste-your-secret-key'
```

### Apply DB Migrations

```
python manage.py makemigrations
python manage.py migrate
```


### Install Node Packages

```
cd client
yarn
```

### Start the server

Under `my-env` virtual environment, run in the terminal

```
python manage.py runserver
```

### Start the client

```
yarn client start
```