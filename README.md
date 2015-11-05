# React-Tooltip
Simple Tooltip component for React.js packaged for Meteor

### Adding it to your project

~~~
meteor add praneybehl:react-tooltip
~~~

### Usage


1 . Add data-tip = "your placeholder" to your element
```html
	<p data-tip="hello world">Tooltip</p>
```

2 . Including react-tooltip component

```jsx
<ReactTooltip />
```


### Options
Notes:
* The tooltip is using `type: dark` `place: top` `effect: float` as **default** attribute, you don't have to add these options if you don't want to change default
* The option you set on `<ReactTooltip />` component will be implemented on every tooltip in a same page: `<ReactTooltip effect="solid" />`
* The option you set on specific elecment, for example: `<a data-type="warning"></a>` will only make effect on this specific tooltip

Check example:  [React-tooltip Test](http://wwayne.com/react-tooltip)

	Global  |	Specific	|	Type	|	Values  |       Description
:-----------|:-------------|:----------|:----------|:------------------
    place	|   data-place  |  String  |  top, right, bottom, left |
    type	|   data-type  |  String  |  success, warning, error, info, light |
    effect	|   data-effect  |  String  |  float, solid |
    offset	|   data-offset  |  Object  |  top, right, bottom, left | data-offset="{'top': 10, 'left': 10}" for specific and offset={{top: 10, left: 10}} for global
   multiline	|   data-multiline  |  Bool  |  true, false | support `<br>`, `<br />` to make multiline
  class	|   data-class  |  String  |  your custom class | extra custom class, can use !important to cover react-tooltip's default class
      html	|   data-html  |  Bool  |  true, false  |  `<p data-tip="<p>HTML tooltip</p>" data-html={true}></p>` or `<ReactTooltip html={true} />`
   delayHide	|   data-delay-hide  |  Number  |   |    `<p data-tip="tooltip" data-delay-hide='1000' or `<ReactTooltip delayHide=1000 />`

### Using react component as tooltip
Check the example [React-tooltip Test](http://wwayne.com/react-tooltip)

##### Note:
1. **data-tip** is necessary, because `<ReactTooltip />` find tooltip via this attribute
2. **data-for** correspond to the **id** of `<ReactTooltip />`
3. When using react component as tooltip, you can have many `<ReactTooltip />` in a page but they should have different **id**

### Methods
`ReactTooltip.hide()` for hide the tooltip manually

`ReactTooltup.rebuild()` for re-bind tooltip to the corresponding element

I suggest always put `<ReactTooltip />` in the Highest level or smart component of Redux, so you might need these static
method to control tooltip's behaviour in some situations

### License

MIT
