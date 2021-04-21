var securityQuestions = [
    {question:'What was your first pet’s name?',expectedAnswer:'FlufferNutter'},
    { question: 'What was the model year of your first car?', expectedAnswer: '1985' },
    { question:'What city were you born in?', expectedAnswer: 'NYC' }]
   var qn = 'What was your first pet’s name?';
   var ans  =  'FlufferNutter';
 var count=0;
 var status;

 function chksecurityQuestions(securityQuestions,qn,ans){
    for(var i=0;i<securityQuestions.length;i++){
        if(securityQuestions[i].question===qn&&securityQuestions[i].expectedAnswer===ans){
            count=1;
            break;
        }
     }
     if(count==1){
         return true;
     }
     else{
         return false;
     }
 }

 var status=chksecurityQuestions(securityQuestions,qn,ans);
 console.log(status);
 
 
 
