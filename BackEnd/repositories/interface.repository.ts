interface IRepository {
  index(pagination: any, filters: any): Promise<any>;
  show(id: string): Promise<any>;
  store(data: JSON): Promise<any>;
  update(id: string, data: JSON): Promise<any>;
  remove(id: string): Promise<any>;
}

export default IRepository;
