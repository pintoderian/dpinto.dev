import { config, fields, collection } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";

const globalComponents = {
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
  }
});
