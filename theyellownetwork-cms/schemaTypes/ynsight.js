export default {
  name: 'ynsight',
  title: 'Ynsight',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Use Case Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
    },
    {
      name: 'solutionProviderName',
      title: 'Solution Provider Name',
      type: 'string',
    },
    {
      name: 'solutionProviderImage',
      title: 'Solution Provider Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule =>
        Rule.custom((file) => {
          const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
          if (!file?.asset?._ref && !file?.asset?._type) return true;
          if (file.asset.mimeType && !acceptedTypes.includes(file.asset.mimeType)) {
            return 'Only JPG, JPEG, or PNG images are allowed';
          }
          return true;
        }),
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
    },
    {
      name: 'impact',
      title: 'Impact',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [{ title: 'Bullet', value: 'bullet' }],
        },
      ],
      description: 'Use bullet points to list key impact areas',
    },
    {
      name: 'expertsTake',
      title: "Expert's Take",
      type: 'text',
    },
    {
      name: 'competitorPositioning',
      title: 'Competitor Positioning',
      type: 'text',
    },
    {
      name: 'enterpriseOneName',
      title: 'Enterprise 1 Name',
      type: 'string',
    },
    {
      name: 'enterpriseOneImage',
      title: 'Enterprise 1 Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule =>
        Rule.custom((file) => {
          const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
          if (!file?.asset?._ref && !file?.asset?._type) return true;
          if (file.asset.mimeType && !acceptedTypes.includes(file.asset.mimeType)) {
            return 'Only JPG, JPEG, or PNG images are allowed';
          }
          return true;
        }),
    },
    {
      name: 'enterpriseTwoName',
      title: 'Enterprise 2 Name',
      type: 'string',
    },
    {
      name: 'enterpriseTwoImage',
      title: 'Enterprise 2 Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule =>
        Rule.custom((file) => {
          const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
          if (!file?.asset?._ref && !file?.asset?._type) return true;
          if (file.asset.mimeType && !acceptedTypes.includes(file.asset.mimeType)) {
            return 'Only JPG, JPEG, or PNG images are allowed';
          }
          return true;
        }),
    },
    {
      name: 'industry',
      title: 'Industry Name',
      type: 'string',
      description: 'E.g., Automotive, BFSI, Manufacturing, etc.',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Thumbnail image for card display',
      validation: Rule =>
        Rule.custom((file) => {
          const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
          if (!file?.asset?._ref && !file?.asset?._type) return true;
          if (file.asset.mimeType && !acceptedTypes.includes(file.asset.mimeType)) {
            return 'Only JPG, JPEG, or PNG images are allowed';
          }
          return true;
        }),
    },
  ],
};
