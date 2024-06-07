const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
});

function validate1()
{
  var msg="";

    if(!/^[a-zA-Z]+@[a-zA-Z]{3,6}\.[a-z-Z]{2,4}$/.test(document.getElementById("email1").value))
      {
        msg+="invalid email";
        document.writeln("");
      }
      if(!/^[0-9]{6}$/.test(document.getElementById("pass1").value))
        {
          msg+="invalid password";
          document.writeln("");
        }

          if(msg!="")
            {
              alert(msg);
              return false;
            }
            return true;
}

function validate2()
{
  var msg="";

  if(!/^[a-zA-Z]+$/.test(document.getElementById("name").value))
    {
      msg+="invalid name";
      document.writeln("");
    }
    if(!/^[a-zA-Z]+@[a-zA-Z]{3,6}\.[a-z-Z]{2,4}$/.test(document.getElementById("email").value))
      {
        msg+="invalid email";
        document.writeln("");
      }
      if(!/^[0-9]{6}$/.test(document.getElementById("password").value))
        {
          msg+="invalid password";
          document.writeln("");
        }
        if(document.getElementById("conf").value!=document.getElementById("password").value)
          {
            msg+="Password not matched";
            document.writeln("");
          }

          if(msg!="")
            {
              alert(msg);
              return false;
            }
            return true;
}