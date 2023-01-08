<template>
  <Bubble
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bubble } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

export default {
  name: 'BubbleChart',
  components: {
    Bubble
  },
  props: {
    chartId: {
      type: String,
      default: 'bubble-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 250
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: 'Data Two',
            backgroundColor: '#7C8CF8',
            data: [
              {
                x: 30,
                y: 5,
                r: 5
              },
              {
                x: 40,
                y: 20,
                r: 5
              },
              {
                x: 50,
                y: 16,
                r: 5
              }
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
