import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';
import Chart from '@/app/ui/dashboard/pie-chart-create';

export default async function PieChart() {
  const data = await fetchFilteredCustomers();
  const { 
    total_pending: total_pending, 
    total_paid: total_paid
  } = {
    total_pending: (data.rows[0].total_pending / 100),
    total_paid: (data.rows[0].total_paid / 100)
  };
  const total = total_pending + total_paid

  const chartData = {
    labels: ['Paid', 'Pending'], // X-axis labels
    datasets: [
      {
        label: 'Amounts (in USD)', // Label for the dataset
        data: [total_paid, total_pending], // Y-axis values for each label
        backgroundColor: ['rgba(0, 155, 192, 0.6)', 'rgba(255, 0, 0, 0.6)'], // Wrap the color in an array
      },
    ],
  };

  return(
    <div className="w-full md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Paid vs Pending Chart
        </h2>
        <div className="rounded-xl bg-gray-50 p-4">
            <div className="rounded-md bg-white p-4 text-sm text-gray-500">
              {/* <p className="rounded-md bg-blue-300 m-4 p-4">
                Paid: ${total_paid}
                //{((total_paid/total)*100).toFixed(2)}%
              </p>  
              <p className="rounded-md bg-red-300 m-4 p-4">
                Pending: ${total_pending}
                //{((total_pending/total)*100).toFixed(2)}%
              </p> */}
              <Chart data={chartData} />
            </div>
        </div>
    </div>
  );
}