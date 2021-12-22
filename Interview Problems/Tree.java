public class Tree<pubic> {
    Integer data;
    Tree right = null;
    Tree left = null;
    Tree(){}
    Tree(Integer data){
        this.data = data;
    }


    Tree invertTree(Tree root){
        if(root == null) return root;
        Tree leftNode = invertTree(root.left);
        Tree rightNode = invertTree(root.right);
        Tree temp = root.left;
        root.left = root.right;
        root.right = temp;
        return root;
    }

    int height(Tree root){
        if(root == null) return 0;
        int lHeght= height(root.left);
        int rHeight= height(root.right);
        return 1 + Math.max(lHeght, rHeight);



    }

     void traverse(Tree root){
        if (root ==null){
            return ;
        }

        traverse(root.left);
         System.out.println(root.data);
        traverse(root.right);
    }
    public Tree createBinaryTree(int[] arr,Tree root, int pos){

       if (pos < arr.length){
           root = new Tree(arr[pos]);
           root.left =  createBinaryTree(arr, root.left, 2*pos + 1);
           root.right =  createBinaryTree(arr, root.right, 2*pos + 2);

       }
       return root;

    }

    public static  void main(String[] args){
        int[] arr= {2,3,6,8,10, 15,18,20,25};
        Tree ob = new Tree();
        Tree root=ob.createBinaryTree(arr, new Tree(), 0);
        ob.traverse(root);
        System.out.println("Height"+ ob.height(root));
//        ob.invertTree(root);
//        ob.traverse(root);



//        Tree root = new Tree(10);
//        Tree left = new Tree(20);
//        Tree right = new Tree(30);
//        root.left = left;
//        root.right = right;
    }
}


