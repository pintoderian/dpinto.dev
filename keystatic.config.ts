import { config, fields, collection, singleton } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";

export const showAdminUI = process.env.NODE_ENV === "development";

const globalComponents = {
  ImagePost: block({
    label: "ImagePost",
    schema: {
      url: fields.text({
        label: "Image URL",
        validation: { isRequired: true }
      }),
      alt: fields.text({
        label: "Alt text",
        description:
          "This text will be used by screen readers and search engines."
      })
    }
  }),
  Grid: wrapper({
    label: "Grid",
    schema: {
      x: fields.select({
        label: "Type",
        options: [
          { label: "full", value: "full" },
          { label: "aside", value: "aside" }
        ],
        defaultValue: "aside"
      })
    }
  }),
  Aside: wrapper({
    label: "Aside",
    schema: {
      title: fields.text({
        label: "Title"
      })
    }
  }),
  ButtonLinks: block({
    label: "ButtonLinks",
    schema: {
      data: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          url: fields.text({ label: "URL" })
        }),
        {
          label: "Link",
          itemLabel: (props) => props.fields.title.value
        }
      )
    }
  })
};

export default config({
  storage: {
    kind: "local"
  },
  ui: {
    brand: { name: "Derian" }
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } }
        }),
        dateCreated: fields.date({
          label: "Date Created",
          validation: { isRequired: true }
        }),
        image: fields.image({
          label: "Image",
          directory: "public/images/projects",
          publicPath: "/images/projects/"
        }),
        description: fields.text({
          label: "Description",
          multiline: true
        }),
        link: fields.text({
          label: "Project Link",
          validation: { isRequired: true }
        }),
        tags: fields.multiselect({
          label: "Tags",
          options: [
            { label: "Next.js", value: "nextjs" },
            { label: "Tailwind Css", value: "tailwind" },
            { label: "Typescript", value: "typescript" },
            { label: "Directus", value: "directus" },
            { label: "PHP", value: "php" },
            { label: "Laravel", value: "laravel" }
          ],
          defaultValue: []
        })
      }
    }),
    experiences: collection({
      label: "Experiences",
      slugField: "company",
      path: "src/content/experiences/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        company: fields.slug({
          name: { label: "Company", validation: { isRequired: true } }
        }),
        job: fields.text({
          label: "Job",
          validation: { isRequired: true }
        }),
        employmentStatus: fields.text({
          label: "Employment Status",
          defaultValue: "Jornada completa",
          validation: { isRequired: true }
        }),
        dateStart: fields.date({
          label: "Date Start",
          validation: { isRequired: true }
        }),
        dateRange: fields.text({
          label: "Date Range",
          validation: { isRequired: true }
        }),
        icon: fields.select({
          label: "Icon",
          description: "The icon at the company",
          options: [
            { label: "Orodelti", value: "orodelti" },
            { label: "SvTechnology", value: "svt" },
            { label: "Ecuavisa", value: "ecuavisa" },
            { label: "El Universo", value: "eluniverso" },
            { label: "Codegea", value: "codegea" }
          ],
          defaultValue: "codegea"
        }),
        content: fields.mdx({
          label: "Content",
          extension: "mdx",
          components: globalComponents
        })
      }
    }),
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        dateCreated: fields.date({
          label: "Date Created",
          validation: { isRequired: true }
        }),
        summary: fields.text({
          label: "Summary",
          multiline: true
        }),
        image: fields.image({
          label: "Image",
          directory: "public/images/posts",
          publicPath: "/images/posts/"
        }),
        content: fields.mdx({
          label: "Content",
          extension: "mdx",
          components: globalComponents
        })
      }
    })
  },

  singletons: {
    settings: singleton({
      label: "Settings",
      path: "src/content/settings/",
      schema: {
        name: fields.text({
          label: "Name",
          validation: { isRequired: true }
        }),
        job: fields.text({
          label: "Job",
          validation: { isRequired: true }
        }),
        image: fields.image({
          label: "Image",
          directory: "public/images/avatar",
          publicPath: "/images/avatar/"
        }),
        openToWork: fields.checkbox({
          label: "Open to Work",
          description: "Enable badge"
        }),
        socialLinks: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            url: fields.text({ label: "URL" }),
            icon: fields.select({
              label: "Icon",
              options: [
                { label: "Github", value: "github" },
                { label: "Linkedin", value: "linkedin" },
                { label: "Mail", value: "mail" }
              ],
              defaultValue: "github"
            })
          }),
          {
            label: "Link",
            itemLabel: (props) => props.fields.title.value
          }
        ),
        yearOfWork: fields.integer({
          label: "Year of start of work",
          description: "It is used to show the variable in the summary"
        }),
        summary: fields.mdx({
          label: "Summary",
          description: "Use :year: to show the number of years of work",
          extension: "mdx"
        }),
        birthdate: fields.date({
          label: "Birthdate",
          description: "It is used to show the variable in the about"
        }),
        about: fields.mdx({
          label: "About me",
          description: "Use :birthdate: to display age in text",
          extension: "mdx"
        }),
        aboutImage: fields.image({
          label: "About Image",
          directory: "public/images/about",
          publicPath: "/images/about/"
        })
      }
    })
  }
});
