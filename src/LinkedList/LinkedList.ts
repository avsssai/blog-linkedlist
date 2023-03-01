export interface ILinkNode<T> {
	val: T;
	next: ILinkNode<T> | null;
}

export class LinkNode<T> implements ILinkNode<T> {
	constructor(public val: T, public next: ILinkNode<T> | null = null) {}
}

export class LinkedList<T> {
	constructor(
		public size: number = 0,
		public head: ILinkNode<T> | null = null
	) {}
	add(val: T): void {
		if (this.head == null) {
			this.addAtStart(val);
		} else {
			this.addToEnd(val);
		}
	}

	addAtStart(val: T) {
		let newNode = new LinkNode(val);
		let temp = this.head;
		this.head = newNode;
		newNode.next = temp;
		this.size++;
	}

	addToEnd(val: T) {
		if (this.head == null) {
			this.addAtStart(val);
		} else {
			let newNode = new LinkNode(val);
			let cur = this.head;
			while (cur && cur.next) {
				cur = cur.next;
			}
			cur.next = newNode;
			this.size++;
		}
	}

	addAt(val: T, position: number) {
		if (position > this.size) {
			return;
		}

		if (this.head == null || position === 0) {
			this.addAtStart(val);
		} else {
			let newNode = new LinkNode(val);
			let cur = this.head;
			let curIndx = 1;
			while (curIndx < position && cur && cur.next) {
				cur = cur.next;
				curIndx++;
			}
			let temp = cur.next;
			cur.next = newNode;
			newNode.next = temp;
			this.size++;
		}
	}
}

// let x = new LinkedList()
// x.add(4)
// x.add(3)
// x.addAt(1, 1)
// x.addAt(6,1)
// x.addAt(7,2)
// console.log(x)
