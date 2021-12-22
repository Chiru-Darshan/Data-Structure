import java.util.HashMap;

public class Sum {
    public static void main(String[] args) {
        int[] num = {1,2,3,4,5,6,7,8,9};
        int k=9;
        int res = 0, curSum = 0;

        HashMap<Integer, Integer> preSum = new HashMap<>();
        preSum.put(0, 1);

        for (int n: num){
            curSum +=n;
            int diff = curSum - k;
            res+= preSum.getOrDefault(diff, 0);
            preSum.put(curSum, 1 + preSum.getOrDefault(curSum, 0));
        }

        System.out.println(res);
    }

}
