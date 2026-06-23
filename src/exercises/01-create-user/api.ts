export type TeamRole = 'Designer' | 'Engineer' | 'Product manager'

export type CreateUserInput = {
  name: string
  email: string
  role: TeamRole
}

export type User = CreateUserInput & {
  id: string
  createdAt: string
}

const existingEmails = new Set(['jane@sample.dev'])

const wait = (milliseconds: number) =>
  new Promise((resolve) => window.setTimeout(resolve, milliseconds))

/**
 * A ready-to-use mock API. Do not change this file while solving the exercise.
 * Use jane@sample.dev to exercise the error path.
 */
export async function createUser(input: CreateUserInput): Promise<User> {
  await wait(650)

  if (existingEmails.has(input.email.toLowerCase())) {
    throw new Error('A teammate with this email already exists.')
  }

  return {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
}
