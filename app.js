
   function SubmitAnswer(team) 
   {

       var question1 = document.getElementById('Question1');
       var question2 = document.getElementById('Question2');
       var question3 = document.getElementById('Question3');

      if (team == 'East')
      {
         var addGrandTotal = parseInt(document.getElementById('EastGrandTotal').value)
         var total = parseInt(CheckAnswer('EastAnswer'));

         if (total == 0) 
         {
            Strike('EastIncorrect');
         }
         else
         {
            if ((question1.style.visibility == 'visible') && (question1.style.display == 'block')) 
            {
               var addTotal = parseInt(document.getElementById('EastRound1Total').value)
               document.getElementById('EastRound1Total').value = addTotal + total;
            }
            if ((question2.style.visibility == 'visible') && (question2.style.display == 'block')) 
            {
               var addTotal = parseInt(document.getElementById('EastRound2Total').value)
               document.getElementById('EastRound2Total').value = addTotal + total;
            }
            if ((question3.style.visibility == 'visible') && (question3.style.display == 'block')) 
            {
               var addTotal = parseInt(document.getElementById('EastRound3Total').value)
               document.getElementById('EastRound3Total').value = addTotal + total;
            }

            document.getElementById('EastGrandTotal').value = addGrandTotal + total;
         }
      }
      else if (team == 'West')
      {
         var addGrandTotal = parseInt(document.getElementById('WestGrandTotal').value)
         var total = parseInt(CheckAnswer('WestAnswer'));

         if (total == 0) 
         {
            Strike('WestIncorrect');
         }
         else
         {
            if ((question1.style.visibility == 'visible') && (question1.style.display == 'block')) 
            {
               var addTotal = parseInt(document.getElementById('WestRound1Total').value)
               document.getElementById('WestRound1Total').value = addTotal + total;
            }
            if ((question2.style.visibility == 'visible') && (question2.style.display == 'block')) 
            {
               var addTotal = parseInt(document.getElementById('WestRound2Total').value)
               document.getElementById('WestRound2Total').value = addTotal + total;
            }
            if ((question3.style.visibility == 'visible') && (question3.style.display == 'block')) 
            {
               var addTotal = parseInt(document.getElementById('WestRound3Total').value)
               document.getElementById('WestRound3Total').value = addTotal + total;
            }

            document.getElementById('WestGrandTotal').value = addGrandTotal + total;
         }
      }
   }

   function Strike(id)
   {
      var incorrect = document.getElementById(id);

       if ( incorrect.src.indexOf('incorrect_blank.jpg') !=-1) 
      {
         incorrect.style.visibility = "visible";
         incorrect.style.display = "block";
         incorrect.src = 'incorrect1.jpg';
      }
       else if ( incorrect.src.indexOf('incorrect1.jpg') !=-1) 
      {
         incorrect.style.visibility = "visible";
         incorrect.style.display = "block";
         incorrect.src = "incorrect2_across.jpg";
      }
       else if ( incorrect.src.indexOf('incorrect2_across.jpg') !=-1) 
      {
         incorrect.style.visibility = "visible";
         incorrect.style.display = "block";
         incorrect.src = "incorrect3_across.jpg";
      }
       else  
      {
         incorrect.style.visibility = "visible";
         incorrect.style.display = "block";
         incorrect.src = "incorrect_blank.jpg";
      }
   }

   function CheckAnswer(answer) 
   {
       var question1 = document.getElementById('Question1');
       var question2 = document.getElementById('Question2');
       var question3 = document.getElementById('Question3');
       var teamAnswer = document.getElementById(answer);
       var total = 0;

      if ((question1.style.visibility == 'visible') && (question1.style.display == 'block'))
      {
         for (i=1; i< 8; i++)    
         {
            if ((document.getElementById('Q1A' + i.toString() + 'Text').innerHTML).toUpperCase() == teamAnswer.value.toUpperCase())
            {
               document.getElementById('Q1A' + i.toString() + 'Text').style.backgroundColor = "yellow";
               document.getElementById('Q1A' + i.toString() + 'Total').style.backgroundColor = "yellow";
               total = document.getElementById('Q1A' + i.toString() + 'Total').innerHTML;
            }
         }
      }
      else if ((question2.style.visibility == 'visible') && (question2.style.display == 'block'))
      {
         for (i=1; i< 6; i++)    
         {
            if ((document.getElementById('Q2A' + i.toString() + 'Text').innerHTML).toUpperCase() == teamAnswer.value.toUpperCase())
            {
               document.getElementById('Q2A' + i.toString() + 'Text').style.backgroundColor = "yellow";
               document.getElementById('Q2A' + i.toString() + 'Total').style.backgroundColor = "yellow";
               total = document.getElementById('Q2A' + i.toString() + 'Total').innerHTML;
            }
         }
      }
      else if ((question3.style.visibility == 'visible') && (question3.style.display == 'block'))
      {
         for (i=1; i< 5; i++)    
         {
            if ((document.getElementById('Q3A' + i.toString() + 'Text').innerHTML).toUpperCase() == teamAnswer.value.toUpperCase())
            {
               document.getElementById('Q3A' + i.toString() + 'Text').style.backgroundColor = "yellow";
               document.getElementById('Q3A' + i.toString() + 'Total').style.backgroundColor = "yellow";
               total = document.getElementById('Q3A' + i.toString() + 'Total').innerHTML;
            }
         }
      }

      return total;
   }

   function NextQuestion() 
   {
      var question1 = document.getElementById('Question1');
      var question2 = document.getElementById('Question2');
      var question3 = document.getElementById('Question3');

      if ((question1.style.visibility != 'hidden') && (question1.style.display != 'none'))
      {
         question1.style.display = "none";
         question1.style.visibility = "hidden";
         question2.style.display = "block";
         question2.style.visibility = "visible";
         question3.style.display = "none";
         question3.style.visibility = "hidden";
      }
      else if ((question2.style.visibility != 'hidden') && (question2.style.display != 'none'))
      {
         question1.style.display = "none";
         question1.style.visibility = "hidden";
         question2.style.display = "none";
         question2.style.visibility = "hidden";
         question3.style.display = "block";
         question3.style.visibility = "visible";
      }
      else if ((question3.style.visibility != 'hidden') && (question3.style.display != 'none'))
      {
         question1.style.display = "none";
         question1.style.visibility = "hidden";
         question2.style.display = "none";
         question2.style.visibility = "hidden";
         question3.style.display = "none";
         question3.style.visibility = "hidden";
      }
      else
      {
         question1.style.display = "block";
         question1.style.visibility = "visible";
         question2.style.display = "none";
         question2.style.visibility = "hidden";
         question3.style.display = "none";
         question3.style.visibility = "hidden";
      }
   }
     