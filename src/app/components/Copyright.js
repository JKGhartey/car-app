export default function Copyright() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="text-center py-10 border-t text-sm ">
      Copyright &copy; EliteAutos {currentYear}. All rights reerved.
    </div>
  );
}
