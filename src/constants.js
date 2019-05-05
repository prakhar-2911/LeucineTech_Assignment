export default {
  sections: [
    {
      fields: [
        {
          name: 'analytical_method_id',
          label: 'Analytical Method ID',
          fluid: true
        },
        {
          name: 'target_residue_type',
          type: 'dropdown',
          label: 'Target Residue Type',
          options: [
            {
              value: 'api',
              label: 'API'
            },
            {
              value: 'cleaning-agent',
              label: 'Cleaning Agent'
            },
            {
              value: 'bioburden',
              label: 'Bioburder'
            },
            {
              value: 'endotoxin',
              label: 'Endotoxin'
            }
          ]
        }
      ]
    },
    {
      fields: [
        {
          name: 'reason',
          label: 'Reason',
          fluid: true
        }
      ]
    }
  ],
  customSection: {
    api: {
      fields: [
        {
          name: 'api-lod',
          label: 'LOD (in ppm)'
        },
        {
          name: 'api-loq',
          label: 'LOQ (in ppm)'
        }
      ],
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'api-swab-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'api-swab-solvent-name',
              label: 'Solvent Name'
            },
            {
              name: 'api-swab-solvent-quality',
              label: 'Solvent Quality'
            },
            {
              name: 'api-swab-default-recovery',
              label: 'Default Recovery',
              fluid: true,
            }
          ]
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'api-rinse-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'api-rinse-solvent-name',
              label: 'Solvent Name'
            },
            {
              name: 'api-rinse-solvent-quality',
              label: 'Solvent Quality'
            },
            {
              name: 'api-rinse-default-recovery',
              label: 'Default Recovery'
            }
          ]
        }
      ]
    },
    'cleaning-agent': {
      fields: [
        {
          name: 'cleaning-agent-lod',
          label: 'LOD (in ppm)'
        },
        {
          name: 'cleaning-agent-loq',
          label: 'LOQ (in ppm)'
        }
      ],
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'cleaning-agent-swab-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'cleaning-agent-swab-solvent-name',
              label: 'Solvent Name'
            },
            {
              name: 'cleaning-agent-swab-solvent-quality',
              label: 'Solvent Quality'
            },
            {
              name: 'cleaning-agent-swab-default-recovery',
              label: 'Default Recovery',
              fluid: true,
            }
          ]
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'cleaning-agent-rinse-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'cleaning-agent-rinse-solvent-name',
              label: 'Solvent Name'
            },
            {
              name: 'cleaning-agent-rinse-solvent-quality',
              label: 'Solvent Quality'
            },
            {
              name: 'cleaning-agent-rinse-default-recovery',
              label: 'Default Recovery'
            }
          ]
        }
      ]
    },
    bioburden: {
      fields: [
        {
          name: 'bioburden-method',
          label: 'Method Used',
          fluid: true
        },
        {
          name: 'bioburden-limit',
          label: 'Define TNTC and TFTC Limits',
          fluid: true,
          options: [
            {
              label: 'Yes',
              id: 'yes',
            },
            {
              label: 'No',
              id: 'no',
            },
          ],
          type: 'radio',
        }
      ],
      radioSection: {
        fields: [
          {
            name: 'bioburden-tntc',
            label: 'TNTC Limit (in CFU)'
          },
          {
            name: 'bioburden-tftc',
            label: 'TFTC Limit (in CFU)'
          },
        ]
      },
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'bioburden-swab-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes',
                },
                {
                  label: 'No',
                  id: 'no',
                },
              ],
              type: 'radio',
            },
            {
              name: 'bioburden-swab-recovery-percentage',
              label: 'Default Recovery (%)'
            },
          ]
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'bioburden-rinse-solvent-volume',
              label: 'Solvent Volume',
              fluid: true
            },
            {
              name: 'bioburden-rinse-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes',
                },
                {
                  label: 'No',
                  id: 'no',
                },
              ],
              type: 'radio',
            },
            {
              name: 'bioburden-rinse-recovery-percentage',
              label: 'Default Recovery (%)'
            },
          ]
        }
      ]
    },
    endotoxin: {
      fields: [
        {
          name: 'endotoxin-method',
          label: 'Method Used',
          fluid: true
        },
        {
          name: 'endotoxin-limit',
          label: 'Define TNTC and TFTC Limits',
          fluid: true,
          options: [
            {
              label: 'Yes',
              id: 'yes',
            },
            {
              label: 'No',
              id: 'no',
            },
          ],
          type: 'radio',
        }
      ],
      radioSection: {
        fields: [
          {
            name: 'endotoxin-tntc',
            label: 'TNTC Limit (in CFU)'
          },
          {
            name: 'endotoxin-tftc',
            label: 'TFTC Limit (in CFU)'
          },
        ]
      },
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'endotoxin-swab-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes',
                },
                {
                  label: 'No',
                  id: 'no',
                },
              ],
              type: 'radio',
            },
            {
              name: 'endotoxin-swab-recovery-percentage',
              label: 'Default Recovery (%)'
            },
          ]
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'endotoxin-rinse-solvent-volume',
              label: 'Solvent Volume',
              fluid: true
            },
            {
              name: 'endotoxin-rinse-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes',
                },
                {
                  label: 'No',
                  id: 'no',
                },
              ],
              type: 'radio',
            },
            {
              name: 'endotoxin-rinse-recovery-percentage',
              label: 'Default Recovery (%)'
            },
          ]
        }
      ]
    }
  }
};
