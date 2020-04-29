window.onload = function(){
    var slider = document.getElementById("myRange");
    var disp = document.getElementById("demo");
    disp.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value
    slider.oninput = function() {
      disp.innerHTML = this.value;
    }
}

function reset() {
  document.getElementById('string1').value = '';
  document.getElementById('string2').value = '';
  document.getElementById('str_out').innerHTML = "";
  document.getElementById("myRange").setAttribute("max",20);
  document.getElementById("myRange").setAttribute("value",20);
  document.getElementById("myRange").oninput(); 
}

function submit() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  var len_1 = str1.length;
  var len_2 = str2.length;

  var slider = document.getElementById('myRange');
  slider.setAttribute("max",len_1+len_2);
  var len = parseFloat(slider.value);
  slider.oninput(); 

  document.getElementById('str_out').innerHTML = "";

  if (len == (len_1+len_2)) {
    document.getElementById('str_out').innerHTML = str1+str2;
  }
  else{

    if(len==0 || len==1 || len==2){
        switch(len){
          case 0: document.getElementById('str_out').innerHTML = "";
                  break;
          case 1: document.getElementById('str_out').innerHTML = str1[0];
                  break;
          case 2: document.getElementById('str_out').innerHTML = str1[0]+str2[0];
                  break;
          default: break; 
        }
    }  
  
    else{

        var vowel = ['a','e','i','o','u'];

        var vowel_pos = [];
        var arr = [];

        for(var i=0; i<len_1; i++){
          var ch = str1.charAt(i).toLowerCase();
          if(vowel.indexOf(ch)>-1){
            arr.push(i);
          }
        }
        vowel_pos.push(arr);
        arr = [];

        for(var j=0; j<len_2; j++){
          var ch = str2.charAt(j).toLowerCase();
          if(vowel.indexOf(ch)>-1){
            arr.push(j);
          }
        }
        vowel_pos.push(arr);

        var s1_1 = [];
        var s1_2 = [];
        var s2_1 = [];
        var s2_2 = [];
        
        for(var i=0; i<vowel_pos[0].length; i++){
          var pos = vowel_pos[0][i];
          s1_2.push(str1.substring(0,pos+1));
          if (pos==0) {continue;}
          s1_1.push(str1.substring(0,pos));
        }

        for(var j=0; j<vowel_pos[1].length; j++){
          var pos = vowel_pos[1][j];
          s2_1.push(str2.substring(pos,len_2));
          if (pos==len_2-1) {continue;}
          s2_2.push(str2.substring(pos+1,len_2));
        }

        var flag =0;

        for(var part1 of s1_1){
          for(var part2 of s2_1){
            var out = part1 + part2;
            var l = out.length;
            if (l == len) {
              document.getElementById('str_out').innerHTML = out;
              flag = 1;
              break;
            }
          }
        }

        if (flag==0) {
          for(var part1 of s1_2){
            for(var part2 of s2_2){
              var out = part1 + part2;
              var l = out.length;
              if (l == len) {
                document.getElementById('str_out').innerHTML = out;
                flag = 1;
                break;
              }
            }
          }

          if (flag==0) {      
            var out = str1 + str2;
            document.getElementById('str_out').innerHTML = out.substring(0,len);
          }
        }

    }

  }  

}

function swap_strings() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  document.getElementById('string1').value = str2;
  document.getElementById('string2').value = str1;
}