# Contributing

Thanks for your willingness to contribute an example to Trigger.dev. Examples are incredibly helpful to people like you who are trying to figure out how to use Trigger.dev to solve certain problems and how to use integrations.

## Keep your example focused

Good examples are focused and avoid unnecessary elements. Start with bare essentials and add only what's needed. This helps users understand the code easily. Avoid clutter. Be concise and targeted in the examples.

Most examples should have a dedicated file where jobs are defined, e.g. `src/jobs.ts`.

You should also try and use `https://cloud.trigger.dev` where it makes sense to make it as easy as possible to get started (or define an environment variable called `TRIGGER_API_URL`)

## How to contribute a new example

1. Fork this repository (click the [Fork](https://github.com/triggerdotdev/examples/fork) button at the top of this page)

2. Clone your fork locally

   ```sh
   # in a terminal, cd to parent directory where you want your clone to be, then
   git clone https://github.com/<your_github_username>/examples.git
   cd examples
   ```

3. Create a new branch for your example

   ```sh
   # Use the new folder you're adding as the branch name
   # Example: git checkout -b github-webhooks
   git checkout -b <folder-name>
   ```

4. Add your example

   Create a new subdirectory at the root of the repository with your example inside. The example should be a standalone runnable project.

   Make the changes you need for your example, add a `README.md`, make sure that it works and that you kept it focused (see above).

5. Commit your changes and push it to your new branch

   ```sh
   git add <folder-name>
   git commit -m "feat: add `<FOLDER-NAME>` example"
   git push -u origin <folder-name>
   ```

6. Head to the [examples repository](https://github.com/triggerdotdev/examples), GitHub will prompt you to create a pull request against the repository.

7. You're done, thank you! 🎉
