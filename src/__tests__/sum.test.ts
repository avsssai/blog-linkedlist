import { describe, test, expect } from "@jest/globals";
import { LinkedList, LinkNode } from "../../src/LinkedList/LinkedList";

describe("test the linked list", () => {
	test("testing linked list initialization", () => {
		let linkedList = new LinkedList();
		expect(linkedList).toMatchObject({ head: null, size: 0 });
	});
});
