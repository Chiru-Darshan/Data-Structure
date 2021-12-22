public class Node {

    int data;
    Node next=null;
    static Node root = null;

    Node(int data){
        this.data = data;
        next= null;
    }
    Node(){}
    Node reverse(Node root){
        if (root.next ==null){
            Node.root = root;
            return root;
        }
        Node lastNode = reverse(root.next);
        lastNode.next =  root;
        root.next =  null;
        return root;


    }
    void traverse(Node root){
        Node cur = root;
        while( cur!= null){
            System.out.println(cur.data);
            cur = cur.next;
        }
    }

    public  static  void main(String[] args){
        Node root = new Node(0);
        Node temp = null;
        Node prev = null;
        prev = root;

        int[] a={10,20,30,40,50};
        for(int n: a){

            temp = new Node(n);
            prev.next = temp;
            prev = temp;
        }

        root.traverse(root);
        root = root.reverse(root);
        System.out.println();
        root.traverse(Node.root);


    }


}
