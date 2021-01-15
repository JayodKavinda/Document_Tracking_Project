using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Forms
{
    public class VehicalFormController : Controller
    {
        // GET: VehicalForm
        public ActionResult Index()
        {
            return View();
        }

        // GET: VehicalForm/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VehicalForm/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: VehicalForm/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VehicalForm/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: VehicalForm/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VehicalForm/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VehicalForm/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}