import { Document } from "mongoose";

interface IRepository {
  index(): Promise<Document[]>;
  show(id: string): Promise<Document>;
  store(data: any): Promise<Document>;
  update(id: string, data: any): Promise<Document>;
  remove(id: string): Promise<Document>;
}

export default IRepository;
