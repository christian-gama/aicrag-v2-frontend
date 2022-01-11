import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateString: any;
  EmailAddress: any;
  JWT: any;
  UUID: any;
};

export type ActivateAccount = {
  __typename?: 'ActivateAccount';
  accessToken: Scalars['JWT'];
  refreshToken: Scalars['JWT'];
  user: PublicUser;
};

export type ActivateAccountInput = {
  activationPin: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type ActiveAccount = {
  __typename?: 'ActiveAccount';
  accessToken: Scalars['JWT'];
  refreshToken: Scalars['JWT'];
  user: PublicUser;
};

export type CreateTask = {
  __typename?: 'CreateTask';
  task: Task;
};

export type CreateTaskInput = {
  commentary?: InputMaybe<Scalars['String']>;
  date: Scalars['DateString'];
  duration: Scalars['Float'];
  status: TaskStatus;
  taskId?: InputMaybe<Scalars['String']>;
  type: TaskType;
};

export type DeleteTask = {
  __typename?: 'DeleteTask';
  message: Scalars['String'];
};

export type DeleteTaskParam = {
  id: Scalars['UUID'];
};

export type DeleteUser = {
  __typename?: 'DeleteUser';
  message: Scalars['String'];
};

export type DeleteUserParam = {
  id: Scalars['UUID'];
};

export type DetailedInvoice = {
  __typename?: 'DetailedInvoice';
  date: GetAllInvoicesDate;
  tasks: Scalars['Int'];
  totalUsd: Scalars['Float'];
};

export type FindAllTasks = {
  __typename?: 'FindAllTasks';
  count: Scalars['Int'];
  displaying: Scalars['Int'];
  documents: Array<Task>;
  page: Scalars['String'];
};

export type FindAllTasksQueries = {
  limit?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FindAllUserTasks = {
  __typename?: 'FindAllUserTasks';
  count: Scalars['Int'];
  displaying: Scalars['Int'];
  documents: Array<Task>;
  page: Scalars['String'];
};

export type FindAllUserTasksParam = {
  userId: Scalars['UUID'];
};

export type FindAllUserTasksQueries = {
  limit?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FindAllUsers = {
  __typename?: 'FindAllUsers';
  count: Scalars['Int'];
  displaying: Scalars['Int'];
  documents: Array<FullUser>;
  page: Scalars['String'];
};

export type FindAllUsersQueries = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FindOneTask = {
  __typename?: 'FindOneTask';
  task: Task;
};

export type FindOneTaskParam = {
  id: Scalars['UUID'];
};

export type ForgotPassword = {
  __typename?: 'ForgotPassword';
  user: PublicUser;
};

export type ForgotPasswordInput = {
  email: Scalars['EmailAddress'];
};

export type FullUser = {
  __typename?: 'FullUser';
  logs: UserLogs;
  personal: UserPersonal;
  settings: UserSettings;
  temporary: UserTemporary;
  tokenVersion: Scalars['Int'];
};

export type GetAllInvoices = {
  __typename?: 'GetAllInvoices';
  count: Scalars['Int'];
  displaying: Scalars['Int'];
  documents: Array<DetailedInvoice>;
  page: Scalars['String'];
};

export type GetAllInvoicesDate = {
  __typename?: 'GetAllInvoicesDate';
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type GetAllInvoicesQueries = {
  limit?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  type: GetAllInvoicesType;
};

export enum GetAllInvoicesType {
  Qa = 'QA',
  Tx = 'TX',
  Both = 'both'
}

export type GetInvoiceByMonth = {
  __typename?: 'GetInvoiceByMonth';
  count: Scalars['Int'];
  displaying: Scalars['Int'];
  documents: Array<Task>;
  page: Scalars['String'];
};

export enum GetInvoiceByMonthOperator {
  Eq = 'eq',
  Gte = 'gte',
  Lte = 'lte'
}

export enum GetInvoiceByMonthPeriod {
  Past_3Days = 'past_3_days',
  Past_7Days = 'past_7_days',
  Past_15Days = 'past_15_days',
  Today = 'today'
}

export type GetInvoiceByMonthQueries = {
  duration?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['String']>;
  month: Scalars['String'];
  operator?: InputMaybe<GetInvoiceByMonthOperator>;
  page?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<GetInvoiceByMonthPeriod>;
  sort?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  type: GetInvoiceByMonthType;
  year: Scalars['String'];
};

export enum GetInvoiceByMonthType {
  Qa = 'QA',
  Tx = 'TX',
  Both = 'both'
}

export type GetMe = {
  __typename?: 'GetMe';
  accessToken?: Maybe<Scalars['JWT']>;
  refreshToken?: Maybe<Scalars['JWT']>;
  user: PublicUser;
};

export type InactiveAccount = {
  __typename?: 'InactiveAccount';
  accessToken: Scalars['JWT'];
  message: Scalars['String'];
};

export type Login = ActiveAccount | InactiveAccount;

export type LoginInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type Logout = {
  __typename?: 'Logout';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateAccount?: Maybe<ActivateAccount>;
  createTask: CreateTask;
  deleteTask: DeleteTask;
  deleteUser: DeleteUser;
  empty?: Maybe<Scalars['String']>;
  forgotPassword: ForgotPassword;
  login?: Maybe<Login>;
  logout: Logout;
  resetPassword: ResetPassword;
  sendEmailPin: SendEmailPin;
  sendRecoverPasswordEmail: SendRecoverPasswordEmail;
  sendWelcomeEmail: SendWelcomeEmail;
  signUp: SignUp;
  updateEmailByPin: UpdateEmailByCode;
  updateMe: UpdateMe;
  updatePassword: UpdatePassword;
  updateTask: UpdateTask;
  updateUser: UpdateUser;
  updateUserTask: UpdateTask;
};


export type MutationActivateAccountArgs = {
  input: ActivateAccountInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationDeleteTaskArgs = {
  param: FindOneTaskParam;
};


export type MutationDeleteUserArgs = {
  param: DeleteUserParam;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendEmailPinArgs = {
  input: SendEmailPinInput;
};


export type MutationSendRecoverPasswordEmailArgs = {
  input: SendRecoverPasswordEmailInput;
};


export type MutationSendWelcomeEmailArgs = {
  input: SendWelcomeEmailInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateEmailByPinArgs = {
  input: UpdateEmailByCodeInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
  param: UpdateTaskParam;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  param: UpdateUserParam;
};


export type MutationUpdateUserTaskArgs = {
  input: UpdateTaskInput;
  param: UpdateTaskParam;
};

export type PublicUser = {
  __typename?: 'PublicUser';
  personal: PublicUserPersonal;
  settings: PublicUserSettings;
};

export type PublicUserPersonal = {
  __typename?: 'PublicUserPersonal';
  email: Scalars['EmailAddress'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type PublicUserSettings = {
  __typename?: 'PublicUserSettings';
  currency: UserCurrency;
};

export type Query = {
  __typename?: 'Query';
  empty?: Maybe<Scalars['String']>;
  findAllTasks: FindAllTasks;
  findAllUserTasks: FindAllUserTasks;
  findAllUsers: FindAllUsers;
  findOneTask: FindOneTask;
  getAllInvoices: GetAllInvoices;
  getInvoiceByMonth: GetInvoiceByMonth;
  getMe: GetMe;
  verifyResetPasswordToken: VerifyResetPasswordToken;
};


export type QueryFindAllTasksArgs = {
  query: FindAllTasksQueries;
};


export type QueryFindAllUserTasksArgs = {
  param: FindAllUserTasksParam;
  query: FindAllUserTasksQueries;
};


export type QueryFindAllUsersArgs = {
  query: FindAllUsersQueries;
};


export type QueryFindOneTaskArgs = {
  param: FindOneTaskParam;
};


export type QueryGetAllInvoicesArgs = {
  query: GetAllInvoicesQueries;
};


export type QueryGetInvoiceByMonthArgs = {
  query: GetInvoiceByMonthQueries;
};


export type QueryVerifyResetPasswordTokenArgs = {
  param: VerifyResetPasswordTokenInput;
};

export type ResetPassword = {
  __typename?: 'ResetPassword';
  refreshToken: Scalars['JWT'];
  user: PublicUser;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type SendEmailPin = {
  __typename?: 'SendEmailPin';
  message: Scalars['String'];
};

export type SendEmailPinInput = {
  email: Scalars['EmailAddress'];
};

export type SendRecoverPasswordEmail = {
  __typename?: 'SendRecoverPasswordEmail';
  message: Scalars['String'];
};

export type SendRecoverPasswordEmailInput = {
  email: Scalars['EmailAddress'];
};

export type SendWelcomeEmail = {
  __typename?: 'SendWelcomeEmail';
  message: Scalars['String'];
};

export type SendWelcomeEmailInput = {
  email: Scalars['EmailAddress'];
};

export type SignUp = {
  __typename?: 'SignUp';
  user: PublicUser;
};

export type SignUpInput = {
  email: Scalars['EmailAddress'];
  name: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  commentary: Scalars['String'];
  date: TaskDate;
  duration: Scalars['Float'];
  id: Scalars['UUID'];
  logs: TaskLogs;
  status: TaskStatus;
  taskId: Scalars['String'];
  type: Scalars['String'];
  usd: Scalars['Float'];
  user: PublicUser;
};

export type TaskDate = {
  __typename?: 'TaskDate';
  day: Scalars['Int'];
  full: Scalars['DateString'];
  hours: Scalars['String'];
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type TaskLogs = {
  __typename?: 'TaskLogs';
  createdAt: Scalars['DateString'];
  updatedAt?: Maybe<Scalars['DateString']>;
};

export enum TaskStatus {
  Completed = 'completed',
  InProgress = 'in_progress'
}

export enum TaskType {
  Qa = 'QA',
  Tx = 'TX'
}

export type UpdateEmailByCode = {
  __typename?: 'UpdateEmailByCode';
  user: PublicUser;
};

export type UpdateEmailByCodeInput = {
  emailPin: Scalars['String'];
};

export type UpdateMe = UpdateMeHasChanges | UpdateMeNoChanges;

export type UpdateMeHasChanges = {
  __typename?: 'UpdateMeHasChanges';
  user: PublicUser;
};

export type UpdateMeInput = {
  currency?: InputMaybe<UserCurrency>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMeNoChanges = {
  __typename?: 'UpdateMeNoChanges';
  message: Scalars['String'];
};

export type UpdatePassword = {
  __typename?: 'UpdatePassword';
  user: PublicUser;
};

export type UpdatePasswordInput = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type UpdateTask = UpdateTaskHasChanges | UpdateTaskNoChanges;

export type UpdateTaskHasChanges = {
  __typename?: 'UpdateTaskHasChanges';
  task: Task;
};

export type UpdateTaskInput = {
  commentary?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateString']>;
  duration?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<TaskStatus>;
  taskId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TaskType>;
};

export type UpdateTaskNoChanges = {
  __typename?: 'UpdateTaskNoChanges';
  message: Scalars['String'];
};

export type UpdateTaskParam = {
  id: Scalars['UUID'];
};

export type UpdateUser = UpdateUserHasChanges | UpdateUserNoChanges;

export type UpdateUserHasChanges = {
  __typename?: 'UpdateUserHasChanges';
  user: FullUser;
};

export type UpdateUserInput = {
  accountStatus?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  handicap?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  tokenVersion?: InputMaybe<Scalars['Int']>;
};

export type UpdateUserNoChanges = {
  __typename?: 'UpdateUserNoChanges';
  message: Scalars['String'];
};

export type UpdateUserParam = {
  id: Scalars['UUID'];
};

export enum UserCurrency {
  Brl = 'BRL',
  Usd = 'USD'
}

export type UserLogs = {
  __typename?: 'UserLogs';
  createdAt: Scalars['DateString'];
  lastLoginAt?: Maybe<Scalars['DateString']>;
  lastSeenAt?: Maybe<Scalars['DateString']>;
  updatedAt?: Maybe<Scalars['DateString']>;
};

export type UserPersonal = {
  __typename?: 'UserPersonal';
  email: Scalars['EmailAddress'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserSettings = {
  __typename?: 'UserSettings';
  accountActivated: Scalars['Boolean'];
  currency: UserCurrency;
  handicap: Scalars['Int'];
  role: Scalars['Int'];
};

export type UserTemporary = {
  __typename?: 'UserTemporary';
  activationPin?: Maybe<Scalars['String']>;
  activationPinExpiration?: Maybe<Scalars['DateString']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  tempEmail?: Maybe<Scalars['String']>;
  tempEmailPin?: Maybe<Scalars['String']>;
  tempEmailPinExpiration?: Maybe<Scalars['DateString']>;
};

export type VerifyResetPasswordToken = {
  __typename?: 'VerifyResetPasswordToken';
  accessToken: Scalars['JWT'];
};

export type VerifyResetPasswordTokenInput = {
  token: Scalars['JWT'];
};

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'GetMe', accessToken?: any | null | undefined, refreshToken?: any | null | undefined, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'Logout', message: string } };

export type UpdateEmailByPinMutationVariables = Exact<{
  emailPin: Scalars['String'];
}>;


export type UpdateEmailByPinMutation = { __typename?: 'Mutation', updateEmailByPin: { __typename?: 'UpdateEmailByCode', user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } };

export type UpdateMeMutationVariables = Exact<{
  currency?: InputMaybe<UserCurrency>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: { __typename?: 'UpdateMeHasChanges', user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } | { __typename?: 'UpdateMeNoChanges', message: string } };

export type UpdatePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UpdatePassword', user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'DeleteUser', message: string } };

export type FindAllUsersQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: { __typename?: 'FindAllUsers', count: number, displaying: number, page: string, documents: Array<{ __typename?: 'FullUser', tokenVersion: number, logs: { __typename?: 'UserLogs', createdAt: any, lastLoginAt?: any | null | undefined, lastSeenAt?: any | null | undefined, updatedAt?: any | null | undefined }, personal: { __typename?: 'UserPersonal', email: any, id: any, name: string, password: string }, settings: { __typename?: 'UserSettings', accountActivated: boolean, currency: UserCurrency, handicap: number, role: number } }> } };

export type UpdateUserMutationVariables = Exact<{
  accountStatus?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  handicap?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  tokenVersion?: InputMaybe<Scalars['Int']>;
  id: Scalars['UUID'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UpdateUserHasChanges', user: { __typename?: 'FullUser', tokenVersion: number, logs: { __typename?: 'UserLogs', createdAt: any, lastLoginAt?: any | null | undefined, lastSeenAt?: any | null | undefined, updatedAt?: any | null | undefined }, personal: { __typename?: 'UserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'UserSettings', accountActivated: boolean, currency: UserCurrency, handicap: number, role: number }, temporary: { __typename?: 'UserTemporary', activationPin?: string | null | undefined, activationPinExpiration?: any | null | undefined, resetPasswordToken?: string | null | undefined, tempEmail?: string | null | undefined, tempEmailPin?: string | null | undefined, tempEmailPinExpiration?: any | null | undefined } } } | { __typename?: 'UpdateUserNoChanges', message: string } };

export type GetAllInvoicesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  type: GetAllInvoicesType;
}>;


export type GetAllInvoicesQuery = { __typename?: 'Query', getAllInvoices: { __typename?: 'GetAllInvoices', count: number, displaying: number, page: string, documents: Array<{ __typename?: 'DetailedInvoice', tasks: number, totalUsd: number, date: { __typename?: 'GetAllInvoicesDate', month: number, year: number } }> } };

export type GetInvoiceByMonthQueryVariables = Exact<{
  duration?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['String']>;
  month: Scalars['String'];
  operator?: InputMaybe<GetInvoiceByMonthOperator>;
  page?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<GetInvoiceByMonthPeriod>;
  sort?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  type: GetInvoiceByMonthType;
  year: Scalars['String'];
}>;


export type GetInvoiceByMonthQuery = { __typename?: 'Query', getInvoiceByMonth: { __typename?: 'GetInvoiceByMonth', count: number, displaying: number, page: string, documents: Array<{ __typename?: 'Task', commentary: string, duration: number, id: any, status: TaskStatus, taskId: string, type: string, usd: number, date: { __typename?: 'TaskDate', day: number, full: any, hours: string, month: number, year: number }, logs: { __typename?: 'TaskLogs', createdAt: any, updatedAt?: any | null | undefined }, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } }> } };

export type ActivateAccountMutationVariables = Exact<{
  activationPin: Scalars['String'];
  email: Scalars['EmailAddress'];
}>;


export type ActivateAccountMutation = { __typename?: 'Mutation', activateAccount?: { __typename?: 'ActivateAccount', accessToken: any, refreshToken: any, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } | null | undefined };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ForgotPassword', user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ActiveAccount', accessToken: any, refreshToken: any, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } | { __typename?: 'InactiveAccount', accessToken: any, message: string } | null | undefined };

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'ResetPassword', refreshToken: any, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } };

export type SendEmailPinMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type SendEmailPinMutation = { __typename?: 'Mutation', sendEmailPin: { __typename?: 'SendEmailPin', message: string } };

export type SendRecoverPasswordEmailMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type SendRecoverPasswordEmailMutation = { __typename?: 'Mutation', sendRecoverPasswordEmail: { __typename?: 'SendRecoverPasswordEmail', message: string } };

export type SendWelcomeEmailMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type SendWelcomeEmailMutation = { __typename?: 'Mutation', sendWelcomeEmail: { __typename?: 'SendWelcomeEmail', message: string } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
  name: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUp', user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } };

export type CreateTaskMutationVariables = Exact<{
  commentary?: InputMaybe<Scalars['String']>;
  date: Scalars['DateString'];
  duration: Scalars['Float'];
  status: TaskStatus;
  taskId?: InputMaybe<Scalars['String']>;
  type: TaskType;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'CreateTask', task: { __typename?: 'Task', commentary: string, duration: number, id: any, status: TaskStatus, taskId: string, type: string, usd: number, date: { __typename?: 'TaskDate', full: any, day: number, hours: string, month: number, year: number }, logs: { __typename?: 'TaskLogs', createdAt: any, updatedAt?: any | null | undefined }, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', name: string, email: any, id: any }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } } };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'DeleteTask', message: string } };

export type FindAllTasksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type FindAllTasksQuery = { __typename?: 'Query', findAllTasks: { __typename?: 'FindAllTasks', count: number, documents: Array<{ __typename?: 'Task', commentary: string, duration: number, id: any, status: TaskStatus, taskId: string, type: string, usd: number, date: { __typename?: 'TaskDate', day: number, full: any, hours: string, month: number, year: number }, logs: { __typename?: 'TaskLogs', createdAt: any, updatedAt?: any | null | undefined }, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } }> } };

export type FindOneTaskQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type FindOneTaskQuery = { __typename?: 'Query', findOneTask: { __typename?: 'FindOneTask', task: { __typename?: 'Task', commentary: string, duration: number, id: any, status: TaskStatus, taskId: string, type: string, usd: number, date: { __typename?: 'TaskDate', day: number, full: any, hours: string, month: number, year: number }, logs: { __typename?: 'TaskLogs', createdAt: any, updatedAt?: any | null | undefined }, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } } };

export type UpdateTaskMutationVariables = Exact<{
  commentary?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateString']>;
  duration?: InputMaybe<Scalars['Float']>;
  id: Scalars['UUID'];
  status?: InputMaybe<TaskStatus>;
  taskId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TaskType>;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'UpdateTaskHasChanges', task: { __typename?: 'Task', commentary: string, duration: number, id: any, status: TaskStatus, taskId: string, type: string, usd: number, date: { __typename?: 'TaskDate', day: number, full: any, hours: string, month: number, year: number }, logs: { __typename?: 'TaskLogs', createdAt: any, updatedAt?: any | null | undefined }, user: { __typename?: 'PublicUser', personal: { __typename?: 'PublicUserPersonal', email: any, id: any, name: string }, settings: { __typename?: 'PublicUserSettings', currency: UserCurrency } } } } | { __typename?: 'UpdateTaskNoChanges', message: string } };

export type VerifyResetPasswordTokenQueryVariables = Exact<{
  token: Scalars['JWT'];
}>;


export type VerifyResetPasswordTokenQuery = { __typename?: 'Query', verifyResetPasswordToken: { __typename?: 'VerifyResetPasswordToken', accessToken: any } };


export const GetMeDocument = gql`
    query GetMe {
  getMe {
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
    accessToken
    refreshToken
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
  }
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateEmailByPinDocument = gql`
    mutation UpdateEmailByPin($emailPin: String!) {
  updateEmailByPin(input: {emailPin: $emailPin}) {
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
  }
}
    `;

/**
 * __useUpdateEmailByPinMutation__
 *
 * To run a mutation, you first call `useUpdateEmailByPinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailByPinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailByPinMutation, { data, loading, error }] = useUpdateEmailByPinMutation({
 *   variables: {
 *      emailPin: // value for 'emailPin'
 *   },
 * });
 */
export function useUpdateEmailByPinMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmailByPinMutation, UpdateEmailByPinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmailByPinMutation, UpdateEmailByPinMutationVariables>(UpdateEmailByPinDocument, options);
      }
export type UpdateEmailByPinMutationHookResult = ReturnType<typeof useUpdateEmailByPinMutation>;
export type UpdateEmailByPinMutationResult = Apollo.MutationResult<UpdateEmailByPinMutation>;
export type UpdateEmailByPinMutationOptions = Apollo.BaseMutationOptions<UpdateEmailByPinMutation, UpdateEmailByPinMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($currency: UserCurrency, $email: EmailAddress, $name: String) {
  updateMe(input: {currency: $currency, email: $email, name: $name}) {
    ... on UpdateMeHasChanges {
      user {
        personal {
          email
          id
          name
        }
        settings {
          currency
        }
      }
    }
    ... on UpdateMeNoChanges {
      message
    }
  }
}
    `;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      currency: // value for 'currency'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($currentPassword: String!, $password: String!, $passwordConfirmation: String!) {
  updatePassword(
    input: {currentPassword: $currentPassword, password: $password, passwordConfirmation: $passwordConfirmation}
  ) {
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
  }
}
    `;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: UUID!) {
  deleteUser(param: {id: $id}) {
    message
  }
}
    `;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const FindAllUsersDocument = gql`
    query FindAllUsers($email: String, $id: String, $limit: String, $name: String, $page: String, $role: String, $sort: String) {
  findAllUsers(
    query: {email: $email, id: $id, limit: $limit, name: $name, page: $page, role: $role, sort: $sort}
  ) {
    count
    displaying
    documents {
      logs {
        createdAt
        lastLoginAt
        lastSeenAt
        updatedAt
      }
      personal {
        email
        id
        name
        password
      }
      settings {
        accountActivated
        currency
        handicap
        role
      }
      tokenVersion
    }
    page
  }
}
    `;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *      email: // value for 'email'
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      name: // value for 'name'
 *      page: // value for 'page'
 *      role: // value for 'role'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($accountStatus: String, $email: String, $handicap: Float, $name: String, $role: String, $tokenVersion: Int, $id: UUID!) {
  updateUser(
    input: {accountStatus: $accountStatus, email: $email, handicap: $handicap, name: $name, role: $role, tokenVersion: $tokenVersion}
    param: {id: $id}
  ) {
    ... on UpdateUserHasChanges {
      user {
        logs {
          createdAt
          lastLoginAt
          lastSeenAt
          updatedAt
        }
        personal {
          email
          id
          name
        }
        settings {
          accountActivated
          currency
          handicap
          role
        }
        temporary {
          activationPin
          activationPinExpiration
          resetPasswordToken
          tempEmail
          tempEmailPin
          tempEmailPinExpiration
        }
        tokenVersion
      }
    }
    ... on UpdateUserNoChanges {
      message
    }
  }
}
    `;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      accountStatus: // value for 'accountStatus'
 *      email: // value for 'email'
 *      handicap: // value for 'handicap'
 *      name: // value for 'name'
 *      role: // value for 'role'
 *      tokenVersion: // value for 'tokenVersion'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAllInvoicesDocument = gql`
    query GetAllInvoices($limit: String, $page: String, $sort: String, $type: GetAllInvoicesType!) {
  getAllInvoices(query: {limit: $limit, page: $page, sort: $sort, type: $type}) {
    count
    displaying
    page
    documents {
      date {
        month
        year
      }
      tasks
      totalUsd
    }
  }
}
    `;

/**
 * __useGetAllInvoicesQuery__
 *
 * To run a query within a React component, call `useGetAllInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllInvoicesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      sort: // value for 'sort'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetAllInvoicesQuery(baseOptions: Apollo.QueryHookOptions<GetAllInvoicesQuery, GetAllInvoicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllInvoicesQuery, GetAllInvoicesQueryVariables>(GetAllInvoicesDocument, options);
      }
export function useGetAllInvoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllInvoicesQuery, GetAllInvoicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllInvoicesQuery, GetAllInvoicesQueryVariables>(GetAllInvoicesDocument, options);
        }
export type GetAllInvoicesQueryHookResult = ReturnType<typeof useGetAllInvoicesQuery>;
export type GetAllInvoicesLazyQueryHookResult = ReturnType<typeof useGetAllInvoicesLazyQuery>;
export type GetAllInvoicesQueryResult = Apollo.QueryResult<GetAllInvoicesQuery, GetAllInvoicesQueryVariables>;
export const GetInvoiceByMonthDocument = gql`
    query GetInvoiceByMonth($duration: Int, $limit: String, $month: String!, $operator: GetInvoiceByMonthOperator, $page: String, $period: GetInvoiceByMonthPeriod, $sort: String, $taskId: String, $type: GetInvoiceByMonthType!, $year: String!) {
  getInvoiceByMonth(
    query: {duration: $duration, limit: $limit, month: $month, operator: $operator, page: $page, period: $period, sort: $sort, taskId: $taskId, type: $type, year: $year}
  ) {
    count
    displaying
    documents {
      commentary
      date {
        day
        full
        hours
        month
        year
      }
      duration
      id
      logs {
        createdAt
        updatedAt
      }
      status
      taskId
      type
      usd
      user {
        personal {
          email
          id
          name
        }
        settings {
          currency
        }
      }
    }
    page
  }
}
    `;

/**
 * __useGetInvoiceByMonthQuery__
 *
 * To run a query within a React component, call `useGetInvoiceByMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvoiceByMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvoiceByMonthQuery({
 *   variables: {
 *      duration: // value for 'duration'
 *      limit: // value for 'limit'
 *      month: // value for 'month'
 *      operator: // value for 'operator'
 *      page: // value for 'page'
 *      period: // value for 'period'
 *      sort: // value for 'sort'
 *      taskId: // value for 'taskId'
 *      type: // value for 'type'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetInvoiceByMonthQuery(baseOptions: Apollo.QueryHookOptions<GetInvoiceByMonthQuery, GetInvoiceByMonthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInvoiceByMonthQuery, GetInvoiceByMonthQueryVariables>(GetInvoiceByMonthDocument, options);
      }
export function useGetInvoiceByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvoiceByMonthQuery, GetInvoiceByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInvoiceByMonthQuery, GetInvoiceByMonthQueryVariables>(GetInvoiceByMonthDocument, options);
        }
export type GetInvoiceByMonthQueryHookResult = ReturnType<typeof useGetInvoiceByMonthQuery>;
export type GetInvoiceByMonthLazyQueryHookResult = ReturnType<typeof useGetInvoiceByMonthLazyQuery>;
export type GetInvoiceByMonthQueryResult = Apollo.QueryResult<GetInvoiceByMonthQuery, GetInvoiceByMonthQueryVariables>;
export const ActivateAccountDocument = gql`
    mutation ActivateAccount($activationPin: String!, $email: EmailAddress!) {
  activateAccount(input: {email: $email, activationPin: $activationPin}) {
    accessToken
    refreshToken
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
  }
}
    `;

/**
 * __useActivateAccountMutation__
 *
 * To run a mutation, you first call `useActivateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateAccountMutation, { data, loading, error }] = useActivateAccountMutation({
 *   variables: {
 *      activationPin: // value for 'activationPin'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useActivateAccountMutation(baseOptions?: Apollo.MutationHookOptions<ActivateAccountMutation, ActivateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivateAccountMutation, ActivateAccountMutationVariables>(ActivateAccountDocument, options);
      }
export type ActivateAccountMutationHookResult = ReturnType<typeof useActivateAccountMutation>;
export type ActivateAccountMutationResult = Apollo.MutationResult<ActivateAccountMutation>;
export type ActivateAccountMutationOptions = Apollo.BaseMutationOptions<ActivateAccountMutation, ActivateAccountMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: EmailAddress!) {
  forgotPassword(input: {email: $email}) {
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
  }
}
    `;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: EmailAddress!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    ... on ActiveAccount {
      accessToken
      refreshToken
      user {
        personal {
          email
          id
          name
        }
        settings {
          currency
        }
      }
    }
    ... on InactiveAccount {
      accessToken
      message
    }
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $passwordConfirmation: String!) {
  resetPassword(
    input: {password: $password, passwordConfirmation: $passwordConfirmation}
  ) {
    refreshToken
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
  }
}
    `;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendEmailPinDocument = gql`
    mutation SendEmailPin($email: EmailAddress!) {
  sendEmailPin(input: {email: $email}) {
    message
  }
}
    `;

/**
 * __useSendEmailPinMutation__
 *
 * To run a mutation, you first call `useSendEmailPinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailPinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailPinMutation, { data, loading, error }] = useSendEmailPinMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendEmailPinMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailPinMutation, SendEmailPinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailPinMutation, SendEmailPinMutationVariables>(SendEmailPinDocument, options);
      }
export type SendEmailPinMutationHookResult = ReturnType<typeof useSendEmailPinMutation>;
export type SendEmailPinMutationResult = Apollo.MutationResult<SendEmailPinMutation>;
export type SendEmailPinMutationOptions = Apollo.BaseMutationOptions<SendEmailPinMutation, SendEmailPinMutationVariables>;
export const SendRecoverPasswordEmailDocument = gql`
    mutation SendRecoverPasswordEmail($email: EmailAddress!) {
  sendRecoverPasswordEmail(input: {email: $email}) {
    message
  }
}
    `;

/**
 * __useSendRecoverPasswordEmailMutation__
 *
 * To run a mutation, you first call `useSendRecoverPasswordEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRecoverPasswordEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRecoverPasswordEmailMutation, { data, loading, error }] = useSendRecoverPasswordEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendRecoverPasswordEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendRecoverPasswordEmailMutation, SendRecoverPasswordEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendRecoverPasswordEmailMutation, SendRecoverPasswordEmailMutationVariables>(SendRecoverPasswordEmailDocument, options);
      }
export type SendRecoverPasswordEmailMutationHookResult = ReturnType<typeof useSendRecoverPasswordEmailMutation>;
export type SendRecoverPasswordEmailMutationResult = Apollo.MutationResult<SendRecoverPasswordEmailMutation>;
export type SendRecoverPasswordEmailMutationOptions = Apollo.BaseMutationOptions<SendRecoverPasswordEmailMutation, SendRecoverPasswordEmailMutationVariables>;
export const SendWelcomeEmailDocument = gql`
    mutation SendWelcomeEmail($email: EmailAddress!) {
  sendWelcomeEmail(input: {email: $email}) {
    message
  }
}
    `;

/**
 * __useSendWelcomeEmailMutation__
 *
 * To run a mutation, you first call `useSendWelcomeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendWelcomeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendWelcomeEmailMutation, { data, loading, error }] = useSendWelcomeEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendWelcomeEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendWelcomeEmailMutation, SendWelcomeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendWelcomeEmailMutation, SendWelcomeEmailMutationVariables>(SendWelcomeEmailDocument, options);
      }
export type SendWelcomeEmailMutationHookResult = ReturnType<typeof useSendWelcomeEmailMutation>;
export type SendWelcomeEmailMutationResult = Apollo.MutationResult<SendWelcomeEmailMutation>;
export type SendWelcomeEmailMutationOptions = Apollo.BaseMutationOptions<SendWelcomeEmailMutation, SendWelcomeEmailMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: EmailAddress!, $name: String!, $password: String!, $passwordConfirmation: String!) {
  signUp(
    input: {email: $email, name: $name, password: $password, passwordConfirmation: $passwordConfirmation}
  ) {
    user {
      personal {
        email
        id
        name
      }
      settings {
        currency
      }
    }
  }
}
    `;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($commentary: String, $date: DateString!, $duration: Float!, $status: TaskStatus!, $taskId: String, $type: TaskType!) {
  createTask(
    input: {commentary: $commentary, date: $date, duration: $duration, status: $status, taskId: $taskId, type: $type}
  ) {
    task {
      commentary
      date {
        full
        day
        hours
        month
        year
      }
      duration
      id
      logs {
        createdAt
        updatedAt
      }
      status
      taskId
      type
      usd
      user {
        personal {
          name
          email
          id
        }
        settings {
          currency
        }
      }
    }
  }
}
    `;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      commentary: // value for 'commentary'
 *      date: // value for 'date'
 *      duration: // value for 'duration'
 *      status: // value for 'status'
 *      taskId: // value for 'taskId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: UUID!) {
  deleteTask(param: {id: $id}) {
    message
  }
}
    `;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const FindAllTasksDocument = gql`
    query FindAllTasks($limit: String, $page: String, $sort: String) {
  findAllTasks(query: {limit: $limit, page: $page, sort: $sort}) {
    count
    documents {
      commentary
      date {
        day
        full
        hours
        month
        year
      }
      duration
      id
      logs {
        createdAt
        updatedAt
      }
      status
      taskId
      type
      usd
      user {
        personal {
          email
        }
        settings {
          currency
        }
      }
    }
  }
}
    `;

/**
 * __useFindAllTasksQuery__
 *
 * To run a query within a React component, call `useFindAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllTasksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFindAllTasksQuery(baseOptions?: Apollo.QueryHookOptions<FindAllTasksQuery, FindAllTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllTasksQuery, FindAllTasksQueryVariables>(FindAllTasksDocument, options);
      }
export function useFindAllTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllTasksQuery, FindAllTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllTasksQuery, FindAllTasksQueryVariables>(FindAllTasksDocument, options);
        }
export type FindAllTasksQueryHookResult = ReturnType<typeof useFindAllTasksQuery>;
export type FindAllTasksLazyQueryHookResult = ReturnType<typeof useFindAllTasksLazyQuery>;
export type FindAllTasksQueryResult = Apollo.QueryResult<FindAllTasksQuery, FindAllTasksQueryVariables>;
export const FindOneTaskDocument = gql`
    query FindOneTask($id: UUID!) {
  findOneTask(param: {id: $id}) {
    task {
      commentary
      date {
        day
        full
        hours
        month
        year
      }
      duration
      id
      logs {
        createdAt
        updatedAt
      }
      status
      taskId
      type
      usd
      user {
        personal {
          email
          id
          name
        }
        settings {
          currency
        }
      }
    }
  }
}
    `;

/**
 * __useFindOneTaskQuery__
 *
 * To run a query within a React component, call `useFindOneTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneTaskQuery(baseOptions: Apollo.QueryHookOptions<FindOneTaskQuery, FindOneTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneTaskQuery, FindOneTaskQueryVariables>(FindOneTaskDocument, options);
      }
export function useFindOneTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneTaskQuery, FindOneTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneTaskQuery, FindOneTaskQueryVariables>(FindOneTaskDocument, options);
        }
export type FindOneTaskQueryHookResult = ReturnType<typeof useFindOneTaskQuery>;
export type FindOneTaskLazyQueryHookResult = ReturnType<typeof useFindOneTaskLazyQuery>;
export type FindOneTaskQueryResult = Apollo.QueryResult<FindOneTaskQuery, FindOneTaskQueryVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($commentary: String, $date: DateString, $duration: Float, $id: UUID!, $status: TaskStatus, $taskId: String, $type: TaskType) {
  updateTask(
    param: {id: $id}
    input: {commentary: $commentary, date: $date, duration: $duration, status: $status, taskId: $taskId, type: $type}
  ) {
    ... on UpdateTaskHasChanges {
      task {
        commentary
        date {
          day
          full
          hours
          month
          year
        }
        duration
        id
        logs {
          createdAt
          updatedAt
        }
        status
        taskId
        type
        usd
        user {
          personal {
            email
            id
            name
          }
          settings {
            currency
          }
        }
      }
    }
    ... on UpdateTaskNoChanges {
      message
    }
  }
}
    `;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      commentary: // value for 'commentary'
 *      date: // value for 'date'
 *      duration: // value for 'duration'
 *      id: // value for 'id'
 *      status: // value for 'status'
 *      taskId: // value for 'taskId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const VerifyResetPasswordTokenDocument = gql`
    query VerifyResetPasswordToken($token: JWT!) {
  verifyResetPasswordToken(param: {token: $token}) {
    accessToken
  }
}
    `;

/**
 * __useVerifyResetPasswordTokenQuery__
 *
 * To run a query within a React component, call `useVerifyResetPasswordTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyResetPasswordTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyResetPasswordTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyResetPasswordTokenQuery(baseOptions: Apollo.QueryHookOptions<VerifyResetPasswordTokenQuery, VerifyResetPasswordTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyResetPasswordTokenQuery, VerifyResetPasswordTokenQueryVariables>(VerifyResetPasswordTokenDocument, options);
      }
export function useVerifyResetPasswordTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyResetPasswordTokenQuery, VerifyResetPasswordTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyResetPasswordTokenQuery, VerifyResetPasswordTokenQueryVariables>(VerifyResetPasswordTokenDocument, options);
        }
export type VerifyResetPasswordTokenQueryHookResult = ReturnType<typeof useVerifyResetPasswordTokenQuery>;
export type VerifyResetPasswordTokenLazyQueryHookResult = ReturnType<typeof useVerifyResetPasswordTokenLazyQuery>;
export type VerifyResetPasswordTokenQueryResult = Apollo.QueryResult<VerifyResetPasswordTokenQuery, VerifyResetPasswordTokenQueryVariables>;