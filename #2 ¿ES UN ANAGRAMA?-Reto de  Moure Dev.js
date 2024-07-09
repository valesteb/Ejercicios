// I decided to translate it to english to take advantage of my language skills and put them into practice as well
// IS IT AN ANAGRAM?

 function areAnagrams (word1, word2){
   word1 = word1.replace(/\s+/g, '')toLowerCase();
   word2 = word2.replace(/\s+/g, '')toLowerCase();
   // I converted the 2 words to lower case and removed any spaces between them.
   if (word1.length !== word2.length) {
        return false;
        
    // if the words are not the same lenght, they are not anagrams
   
   return word1.split('').sort().join('') === word2.split('').sort().join(''); 
       
     // Sort the letters in each word and compare 
 
 }

document.write(areAnagrams('Listen', 'Silent')); 
document.write(areAnagrams('Hello', 'World'));
