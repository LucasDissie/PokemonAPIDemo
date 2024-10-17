export interface IDiscussion {
    statement: string;
    explanation: string;
    createdBy: string;  // user ID as string
    arguments: string[];  // array of argument IDs
    createdAt: Date;
  }
  
  export interface IArgument {
    text: string;
    position: number;
    agreesWithStatementVotes: number;
    disagreesWithStatementVotes: number;
    parentDiscussion: string | null;
    parentArgument: string | null;
    createdBy: string;
    discussion: string;
    createdAt: Date;
  }
  
  export interface IUser {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
  }
  