import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>My Online Notebook - Capture Your Notes and Diary Entries</title>
        <meta
          name="description"
          content="Digital notebook and diary to keep your notes organized. Write daily entries, ideas, and personal reflections."
        />
        <meta name="keywords" content="notebook, note, diary, online notebook, digital diary, journaling" />
      </Helmet>

      <main>
        <article>
          <header>
            <h1>My Digital Notebook & Diary</h1>
            <p>A simple way to keep track of your thoughts and experiences.</p>
          </header>

          <section>
            <h2>Write a New Note</h2>
            <p>Start capturing your ideas or daily diary entry.</p>
            {/* Add your note-taking component here */}
          </section>

          <section>
            <h2>Organize Your Notebook</h2>
            <p>Easily categorize and search your notes.</p>
            {/* Add your note organization features here */}
          </section>

          <section>
            <h2>About This Notebook</h2>
            <p>
              This digital notebook is designed to be a simple and effective tool
              for taking notes and keeping a diary.
            </p>
            <img src="/images/notebook-image.jpg" alt="Notebook and pen for writing notes" />
          </section>
        </article>
      </main>
    </>
  );
}

export default App;