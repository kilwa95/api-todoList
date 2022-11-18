interface Repository {
  findAll(): Promise<any>;
  save(resource: any): Promise<any>;
  update(id: string, resource: any): Promise<any>;
  delete(id: string): Promise<any>;
  toggleDone(id: string): Promise<any>;
}

export default Repository;
