# Grad Assignment
Contact: Michael Hill

An in depth example at using jade/pug as a templating language for UI creation using mixins and a modularized design.
---

This assignment build on what was covered in class to use best practices for modularizing jade/pug templates. It is meant to strictly focus on views and routes to those views.

This design shows the basics of how mixins can be used to create a single code path and modularize the architecture.

The two fundamental pages that are created with this design are the login page and register page. Let's take a look at the code for the login page in depth to explore the design:

```
extends ../includes/layout

block content
    +form('Login', "/users/login")
        +emailField('false', 'Email')
        +passwordField('password')
        +submitButton('Login')
```

This code uses many mixins and extends a template to achieve a simple, readable design. 

1. The login template, and all templates, extend the layout template. This allows all of the layout based logic to be handled in one simple template. This makes changing layout, nav, etc very easy. Here is the layout template:

    ```
    include mixins

	+doctype
	+bootswatch("cyborg")
	+nav({ 'Send': '#', Contact: "#" }, 'GrumpyGrams')
		+dropdown('Dashboard')
			if (user)
				+list({Logout: '/users/logout'})
				+dropdownDivider('Account')
					+list({"Your Account": '/account', 'Your Orders': '/orders'})
			else
				+list({Login: '/users/login', Register: '/users/register'})
	block content
    ```
	
	This temlate first includes mixins, to make them useable in all templates. Second it uses some custom mixins to create the theme, navigation, etc. View these mixins at views/includes/mixins for more info. 
	
2. The login template utilizes the form mixin to create a basic form. Let's take a look at teh code for the form template:
```
mixin form(heading, uri)
    +center()
        +panel(heading)
            center
                h1 #{heading}
            form(action=uri, method="POST")
                block
```
I wanted to show this mixin specifically because it shows that, to maximize reusability, a mixin can be made up of other mixins.

3. Lastly, the login template fills the form with a few standardized elemnts, using mixins. These can be seen in more detail in the mixins file.

---

#### Conclusion

Ultimately mixins allow us to modularize and compose pages based on prebuilt templates and components, which creates an ecosystem for designing more consistent, scalable, and maintainable we applications.

Please review the code for more in depth examples.