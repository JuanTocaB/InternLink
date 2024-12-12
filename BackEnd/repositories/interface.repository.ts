import { Document } from "mongoose";

interface IRepository {
  index(): Promise<Document[]>;
  show(id: string): Promise<Document>;
  store(data: JSON): Promise<Document>;
  update(id: string, data: JSON): Promise<Document>;
  remove(id: string): Promise<Document>;
}

export default IRepository;
