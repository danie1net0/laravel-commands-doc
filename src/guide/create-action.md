# Create action

The `make:action` command is a Laravel command that allows you to create a new action class. An action class is used to 
group business logic into a single object, making it more organized and reusable.

To create a new action class, simply run the `php artisan make:action` command followed by the name of the class you want 
to create. For example, to create an action class called CreateUser, you would run the following command:

```bash
php artisan make:action CreateUser
```
This will create the following files:
```
├── app
│   └── Actions
│       └── CreateUser
└── tests
    └── Feature
        └── Actions
            └── CreateUserTest
```

## Options

In addition to the class name, you can also specify additional options when creating an action class. Some useful 
options include:

* **--create**: create a create action for a specific model
* **--update**: create a update action for a specific model
* **--delete**: create a delete action for a specific model
* **--crud**: create actions for create, update and delete (all previous options)
* **--without-tests**: allows create an action without tests
* **--unit-test**: allows create an action with unit test instead of default feature test
* **--method**: allows you to specify the main method of the action class instead of default `execute`

The **--create**, **--update** and **--delete** options would be followed with the **--model** option. For example,
if you're creating an action class to create a user, you should use below command to indicate that the action class is related to the User model.
```bash
php artisan --create --model=App\Models\User
```
