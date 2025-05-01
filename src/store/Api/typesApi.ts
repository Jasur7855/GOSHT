interface IMasterclassResponse {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export type IMasterclassesResponse = IShowResponse[];
interface IShowResponse extends IMasterclassResponse {}
export type IShowsResponse = IShowResponse[];
