console.log("JS WORKING");
//Variables for all Games
//Castora
var castoraImages = ['./assets/castora.jpg','./assets/castora_1.png', 'assets/castora_2.png', 'assets/castoraGameOver.jpg'];
var castoraImage = document.getElementById('castora-image');
var castoraIndex = 0;
castoraImage.src = castoraImages[castoraIndex];
//Ermitao
var ermitaoImages = ['assets/ermitaoLogo.png','assets/ermitaoGameplay.png', 'assets/ErmitaoPOW.png', 'assets/ErmitaoLatilson.png'];
var ermitaoImage = document.getElementById('ermitao-image');
var ermitaoIndex = 0;
ermitaoImage.src = ermitaoImages[ermitaoIndex];
//Satellight
var satellightImages = ['assets/satellight_splash_mini.png','assets/satellight_1.png',
 'assets/satellight_2.png', 'assets/satellight_3.png'];
var satellightImage = document.getElementById('satellight-image');
var satellightIndex = 0;
satellightImage.src = satellightImages[satellightIndex];
//Terraform
var terraformImages = ['assets/terraform_splash.jpg','assets/terraform_gameplay2.png',  'assets/terraform_npc.png', 'assets/bossataque1.gif',
  'assets/purificaçao.gif'];
var terraformImage = document.getElementById('terraform-image');
var terraformIndex = 0;
terraformImage.src = terraformImages[terraformIndex];

function nextImage(value, gameName) {

switch (gameName) {
    case 'CASTORA':
      castoraIndex += value;
      if(castoraIndex >= castoraImages.length)
        castoraIndex = 0;
      if(castoraIndex < 0)
        castoraIndex = castoraImages.length - 1;
      castoraImage.src = castoraImages[castoraIndex];
    break;
    case 'ERMITAO':
      ermitaoIndex += value;
      if(ermitaoIndex >= ermitaoImages.length)
        ermitaoIndex = 0;
      if(ermitaoIndex < 0)
        ermitaoIndex = ermitaoImages.length - 1;
      ermitaoImage.src = ermitaoImages[ermitaoIndex];
      break;
    case 'SATELLIGHT':
      satellightIndex += value;
      if(satellightIndex >= satellightImages.length)
        satellightIndex = 0;
      if(satellightIndex < 0)
        satellightIndex = satellightImages.length - 1;
      satellightImage.src = satellightImages[satellightIndex];
      break;
    case 'TERRAFORM':
      terraformIndex += value;
      if(terraformIndex >= terraformImages.length)
        terraformIndex = 0;
      if(terraformIndex < 0)
        terraformIndex = terraformImages.length - 1;
      terraformImage.src = terraformImages[terraformIndex];
      break;
    default:

  }


}
