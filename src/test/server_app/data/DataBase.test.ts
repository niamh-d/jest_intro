import { DataBase } from "../../../app/server_app/data/DataBase";
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe("DataBase suite", () => {
  let sut: DataBase<someTypeWithId>;

  const fakeId = "1234";

  const someObject = {
    id: "",
    name: "someName",
    color: "purple",
  };

  const someObject2 = {
    id: "",
    name: "someOtherName",
    color: "purple",
  };

  beforeEach(() => {
    sut = new DataBase<someTypeWithId>();
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);
  });

  it("should return id after insert", async () => {
    const actual = await sut.insert({ id: "" } as any);
    expect(actual).toBe(fakeId);
  });

  it("should get element after insert", async () => {
    const id = await sut.insert(someObject);
    const actual = await sut.getBy("id", id);
    expect(actual).toBe(someObject);
  });

  it("should find all elements with the same property", async () => {
    await sut.insert(someObject);
    await sut.insert(someObject2);

    const expected = [someObject, someObject2];
    const actual = await sut.findAllBy("color", "purple");

    expect(actual).toEqual(expected);
  });

  it("should change the color on an object", async () => {
    const id = await sut.insert(someObject);
    const newColor = "green";

    await sut.update(id, "color", newColor);
    const actual = await sut.getBy("id", id);
    const actualColor = actual.color;

    expect(actualColor).toBe(newColor);
  });

  it("should delete object", async () => {
    const id = await sut.insert(someObject);
    await sut.delete(id);

    const actual = await sut.getBy("id", id);
    expect(actual).toBeUndefined();
  });

  it("should get all elements", async () => {
    await sut.insert(someObject);
    await sut.insert(someObject2);

    const expected = [someObject, someObject2];
    const actual = await sut.getAllElements();
    expect(actual).toEqual(expected);
  });
});
