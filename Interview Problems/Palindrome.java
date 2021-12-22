public class Palindrome {
    public void swap(char[] s, int i, int pos){
        char t =  s[i];
        s[i] = s[pos];
        s[pos] = t;
    }

    public void permutations(char[] s,int len, int pos){

        if(pos == len){
            for(char c: s)
                System.out.print(c);
            System.out.println();
            return;
        }
        for(int i = pos;i< len;i++)
        {
            this.swap(s, i, pos);
            permutations(s, len,pos + 1);
            this.swap(s, i, pos); //backtracking
        }
    }

    public static void main(String[] args) {
        Palindrome p = new Palindrome();
        String s = "ABC";
        int len = s.length();
        char[] str=s.toCharArray();
        p.permutations(str, len, 0);
    }
}
