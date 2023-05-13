
//  function to test if a word is a palindrome
function  ispalindrome (STRING) 

    if (str.length() == 0 || str.length() == 1) 
        return TRUE;    // if the string contains no character or a single character, it is a palindrome.


    else (str.charAt(0) != str.charAt(str.length() - 1)) 
        return FALSE;  //we compare the characters located at the ends of the word, if different we stop.

    if (str.charAt(0) == str.charAt(str.length() - 1)) // if equality, we test the rest of the word.
        return str.slice(1, str.length()-1);   
    
    ispalindrome(STRING)


END_IF









