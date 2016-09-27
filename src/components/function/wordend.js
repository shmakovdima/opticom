export default function wordend(num, words){
    return words[((num%100 > 10 && num%100 < 15) || num%10 > 4 || num%10 == 0)? 2 : (num%10 == 1)? 0 : 1]
}