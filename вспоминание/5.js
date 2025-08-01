class bi_tree{
    constructor(val,left_chilf,right_child){
        this.val=val
        this.left_chilf=left_chilf
        this.right_child=right_child
    }
}

a=new bi_tree(1)
a.right_child=new bi_tree(2)
a.left_chilf=new bi_tree(3)

a.right_child.right_child=new bi_tree(4)

function dfs(node,dep) {
    
    if (!node) {return;
        
    }
    console.log('::: ',node.val );
    console.log('dep::: ', dep);
    dfs(node.right_child,dep+1)
    dfs(node.left_chilf,dep+1)
}

dfs(a,1)
pas=123