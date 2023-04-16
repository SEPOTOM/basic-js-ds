const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {

    if ( !this._root ) {

      return null;

    }

    return this._root;

  }

  add( data ) {

    if ( !this.root() ) {

      this._root = new Node( data );
      return;

    }

    let currentNode = this.root();

    while ( true ) {

      if ( data === currentNode.data ) {

        break;

      }

      if ( data > currentNode.data && currentNode.right ) {

        currentNode = currentNode.right;
        continue;

      }

      if ( data > currentNode.data && !currentNode.right ) {

        currentNode.right = new Node( data );
        break;

      }

      if ( data < currentNode.data && currentNode.left ) {

        currentNode = currentNode.left;
        continue;

      }

      if ( data < currentNode.data && !currentNode.left ) {

        currentNode.left = new Node( data );
        break;

      }

    }

  }

  has( data ) {

    if ( !this.root() ) {

      return false;

    }

    let currentNode = this.root();

    while ( true ) {

      if ( data === currentNode.data ) {

        return true;

      }

      if ( data > currentNode.data && currentNode.right ) {

        currentNode = currentNode.right;
        continue;

      }

      if ( data < currentNode.data && currentNode.left ) {

        currentNode = currentNode.left;
        continue;

      }

      if ( !currentNode.left || !currentNode.right ) {

        return false;

      }

    }

  }

  find( data ) {

    if ( !this.root() ) {

      return null;

    }

    let currentNode = this.root();

    while ( true ) {

      if ( data === currentNode.data ) {

        return currentNode;

      }

      if ( data > currentNode.data && currentNode.right ) {

        currentNode = currentNode.right;
        continue;

      }

      if ( data < currentNode.data && currentNode.left ) {

        currentNode = currentNode.left;
        continue;

      }

      if ( !currentNode.left || !currentNode.right ) {

        return null;

      }

    }

  }

  remove( data ) {

    if ( !this.root() ) {

      return;

    }

    let parentNode = null;
    let nodeToDelete = this.root();

    while ( true ) {

      if ( data === nodeToDelete.data ) {

        break;

      }

      if ( data > nodeToDelete.data && nodeToDelete.right ) {

        parentNode = nodeToDelete;
        nodeToDelete = nodeToDelete.right;
        continue;

      }

      if ( data < nodeToDelete.data && nodeToDelete.left ) {

        parentNode = nodeToDelete;
        nodeToDelete = nodeToDelete.left;
        continue;

      }

      return;

    }

    if ( !nodeToDelete.left ) {

      if ( !parentNode && !nodeToDelete.right ) {

        this._root= new Node( null );
        return;

      } else if ( !parentNode ) {

        this._root= nodeToDelete.right;
        return;

      } else if ( !nodeToDelete.right ) {

        if ( parentNode.left === nodeToDelete ) {

          parentNode.left = null;

        } else {

          parentNode.right = null;

        }

        return;

      } else {

        if ( parentNode.left === nodeToDelete ) {

          parentNode.left = nodeToDelete.right;

        } else {

          parentNode.right = nodeToDelete.right;

        }

        return;

      }

    }

    let replacementParentNode = nodeToDelete;
    let replacementNode = nodeToDelete.left;

    while ( true ) {

      if ( replacementNode.right ) {

        replacementParentNode = replacementNode;
        replacementNode = replacementNode.right;
        continue;

      }

      break;

    }

    nodeToDelete.data = replacementNode.data;

    if ( replacementParentNode === nodeToDelete ) {

      nodeToDelete.left = replacementNode.left;
      return;

    }

    if ( replacementNode.left ) {

      replacementParentNode.right = replacementNode.left;

    } else {

      replacementParentNode.right = null;

    }

  }

  min() {

    if ( !this.root() ) {

      return null;

    }

    let smallestNode = this.root();

    while ( true ) {

      if ( smallestNode.left ) {

        smallestNode = smallestNode.left;

      } else {

        break;

      }

    }

    return smallestNode.data;

  }

  max() {

    if ( !this.root() ) {

      return null;

    }

    let biggestNode = this.root();

    while ( true ) {

      if ( biggestNode.right ) {

        biggestNode = biggestNode.right;

      } else {

        break;

      }

    }

    return biggestNode.data;

  }
}

module.exports = {
  BinarySearchTree
};