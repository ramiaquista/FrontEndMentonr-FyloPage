import React from 'react';

const Nav = () => {
  return (
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-10 bg-white sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <a href="/home" class="text-3xl font-bold no-underline text-dark">Fylo</a>
  </div>
  <div>
    <a href="/two" class="text-lg no-underline text-dark-300 hover:text-blue-dark ml-10">Features</a>
    <a href="/one" class="text-lg no-underline text-dark-300 hover:text-blue-dark ml-10">Team</a>
    <a href="/three" class="text-lg no-underline text-dark-300 hover:text-blue-dark ml-10">Sign In</a>
  </div>
</nav>
  );
};

export default Nav;
