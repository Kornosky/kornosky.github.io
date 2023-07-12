const data = [
  {
    title: 'Scripting with the Deadline Thinkbox API',
    post: '2023-07-05-Scripting-With-Thinkbox-Deadline-API.md',
    subtitle: 'raycaster-simplified!',
    image: 'ReflectionScene_Loop.gif',
    desc:
        'This is going to be a blog post about all the caveats, limitations, and uses of the deadline api.',
  },
  {
    title: 'C++ Graphics Raycaster Simplified',
    post: '2021-03-24-raycaster-simplified.md',
    subtitle: 'raycaster-simplified!',
    image: 'ReflectionScene_Loop.gif',
    desc:
        'This article simplifies raycasters by abstracting complex math and focuses on core concepts for easy application in C++ projects. Peripheral topics like window creation are excluded.',
  },
].map((item) => {
  // Assume the paths of the post and image, appending to the specified vaule
  // Match dates from post name, give my birth date if invalid.
  const { post, ...rest } = item;
  const match = post.match(/^(\d{4}-\d{2}-\d{2})-/);
  const date = match ? match[1] : '1998-06-22';
  return {
    ...rest, post: `blogs/${item.post}`, image: `/images/blog/${item.image}`, date,
  };
});

export default data;
