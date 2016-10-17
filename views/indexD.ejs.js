<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to your To Do List app</p>


    <table width=90% name="CRUD">

    <tr>
      <td valign=top>
        <br><h3>Add Item</h3>
        <form action="/create" method="post" accept-charset="utf8" name="create">
          <input type="text" name="username" value="Name/Email" onfocus="this.value='';"/>
          <input type="text" name="itemname" value="To Do Item" onfocus="this.value='';" /><br>
          <input type="date" name="schedule" value="Schedule" onfocus="this.value='';"/>
          <select name="category" default="Food">
            <option value="Food">Food Order</option>
            <option value="Shopping">Shopping</option>
            <option value="Homehelp">Home Help</option>
            <option value="Driver">Driver Service</option>
            <option value="Tailoring">Tailoring</option>
            <option value="Other">Other</option>
            <input type="submit" name="Add" value="Add"/>
        </form>
      </td>
      <td valign=top>


      <br><h3>Items List</h3>
      <table>
      <br><br>
      Here is the list of items
      <br><br>

      <ol>
        <% console.log(todos);

          todos.forEach(function (todo)
          {
            console.log(todo.itemname + " " + todo.username+" ");
            %>
            <li><p> <%= todo.itemname %> for <%=todo.user_id%> in Category <%= todo.category %>
            <a href="/delete/<%=todo._id%>" title="delete">Delete</a>
            </p>
            </li>
            <%});

        %>
      </ol>
    </form>
  </td>

  </body>
</html>
