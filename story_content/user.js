function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62mlYFObNyA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v21q1attempts:player.GetVar("v22q1attempts"),v22q1answeredcorrect:player.GetVar("v22q1answeredcorrect"),v22q2attempts:player.GetVar("v22q2attempts"),v22q2answeredcorrect:player.GetVar("v22q2answeredcorrect"),v22q3attempts:player.GetVar("v22q3attempts"),v22q3answeredcorrect:player.GetVar("v22q3answeredcorrect")})
	}
	)
}

